<?php

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

declare(strict_types=1);

namespace OCA\Sharing\Tests;

use OCA\Sharing\Exception\ShareNotFoundException;
use OCA\Sharing\Manager;
use OCA\Sharing\Model\Share;
use OCA\Sharing\Model\ShareAccessContext;
use OCA\Sharing\Registry;
use OCA\Sharing\ResponseDefinitions;
use OCP\IUser;
use OCP\IUserManager;
use OCP\Server;
use PHPUnit\Framework\Attributes\Group;
use Test\TestCase;

/**
 * @psalm-import-type SharingShare from ResponseDefinitions
 * @psalm-import-type SharingPartialShare from ResponseDefinitions
 */
#[Group(name: 'DB')]
abstract class AbstractApiTests extends TestCase {
	protected Manager $manager;

	protected Registry $registry;

	protected IUser $owner1;

	protected IUser $owner2;


	public function setUp(): void {
		parent::setUp();

		$this->manager = Server::get(Manager::class);

		$this->registry = Server::get(Registry::class);

		$owner1 = Server::get(IUserManager::class)->createUser('owner1', 'password');
		$this->assertNotFalse($owner1);
		$this->owner1 = $owner1;
		$this->owner1->setDisplayName('Owner 1');

		$owner2 = Server::get(IUserManager::class)->createUser('owner2', 'password');
		$this->assertNotFalse($owner2);
		$this->owner2 = $owner2;
		$this->owner2->setDisplayName('Owner 2');
	}

	protected function tearDown(): void {
		foreach ($this->manager->list(new ShareAccessContext(force: true), null, null, null) as $share) {
			$this->manager->delete(new ShareAccessContext(force: true), $share->id);
		}

		$this->registry->clear();

		$this->owner1->delete();
		$this->owner2->delete();

		parent::tearDown();
	}

	protected function register(): void {
		$this->registry->registerSourceType(new TestShareSourceType(['source1' => 'Source 1']));
		$this->registry->registerSourceType(new TestShareSourceType2(['source2' => 'Source 2']));
		$this->registry->registerRecipientType(new TestShareRecipientType(['recipient1' => 'Recipient 1'], [], []));
		$this->registry->registerRecipientType(new TestShareRecipientType2(['recipient2' => 'Recipient 2'], [], []));
		$this->registry->registerFeature(new TestShareFeature(['key1']));
		$this->registry->registerFeatureCompatibleWithSourceType(TestShareFeature::class, TestShareSourceType::class);
		$this->registry->registerFeatureCompatibleWithRecipientType(TestShareFeature::class, TestShareRecipientType::class);
		$this->registry->registerFeature(new TestShareFeature2(['key2']));
		$this->registry->registerFeatureCompatibleWithSourceType(TestShareFeature2::class, TestShareSourceType2::class);
		$this->registry->registerFeatureCompatibleWithRecipientType(TestShareFeature2::class, TestShareRecipientType2::class);
	}

	/**
	 * @return SharingPartialShare
	 */
	private function getShareData(): array {
		return [
			'owner' => [
				'user_id' => 'owner1',
			],
			'sources' => [
				[
					'type' => TestShareSourceType::class,
					'value' => 'source1',
				],
				[
					'type' => TestShareSourceType2::class,
					'value' => 'source2',
				],
			],
			'recipients' => [
				[
					'type' => TestShareRecipientType::class,
					'value' => 'recipient1',
				],
				[
					'type' => TestShareRecipientType2::class,
					'value' => 'recipient2',
				],
			],
			'properties' => [
				TestShareFeature::class => [
					'key1' => ['value1'],
				],
				TestShareFeature2::class => [
					'key2' => ['value2'],
				],
			],
		];
	}

	/**
	 * @return SharingPartialShare
	 */
	private function getShareDataWithDisplayNames(): array {
		return [
			'owner' => [
				'user_id' => 'owner1',
				'display_name' => 'Owner 1',
			],
			'sources' => [
				[
					'type' => TestShareSourceType::class,
					'value' => 'source1',
					'display_name' => 'Source 1',
				],
				[
					'type' => TestShareSourceType2::class,
					'value' => 'source2',
					'display_name' => 'Source 2',
				],
			],
			'recipients' => [
				[
					'type' => TestShareRecipientType::class,
					'value' => 'recipient1',
					'display_name' => 'Recipient 1',
				],
				[
					'type' => TestShareRecipientType2::class,
					'value' => 'recipient2',
					'display_name' => 'Recipient 2',
				],
			],
			'properties' => [
				TestShareFeature::class => [
					'key1' => ['value1'],
				],
				TestShareFeature2::class => [
					'key2' => ['value2'],
				],
			],
		];
	}

	/**
	 * @param SharingPartialShare $data
	 * @return SharingShare
	 */
	abstract protected function createShare(array $data): array;

	public function testCreateShare(): void {
		$this->register();

		$data = $this->getShareData();
		$response = $this->createShare($data);
		$this->assertArrayHasKey('id', $response);
		unset($response['id']);
		$this->assertArrayHasKey('last_updated', $response);
		unset($response['last_updated']);
		$this->assertEquals($this->getShareDataWithDisplayNames(), $response);
	}

	/**
	 * @param non-empty-string $shareID
	 * @return SharingShare
	 */
	abstract protected function getShare(string $shareID): array;

	public function testGetShare(): void {
		$this->register();

		$data = $this->manager->completePartialShareData($this->getShareData());
		$share = Share::fromArray($data);
		$this->manager->insert(new ShareAccessContext(force: true), $share);

		$response = $this->getShare($share->id);
		$this->assertArrayHasKey('id', $response);
		unset($response['id']);
		$this->assertArrayHasKey('last_updated', $response);
		unset($response['last_updated']);
		$this->assertEquals($this->getShareDataWithDisplayNames(), $response);
	}

	/**
	 * @param non-empty-string $shareID
	 */
	abstract protected function deleteShare(string $shareID): void;

	public function testDeleteShare(): void {
		$this->register();

		$data = $this->manager->completePartialShareData($this->getShareData());
		$share = Share::fromArray($data);
		$this->manager->insert(new ShareAccessContext(force: true), $share);

		$this->deleteShare($share->id);

		$this->expectException(ShareNotFoundException::class);
		$this->manager->get(new ShareAccessContext(force: true), $share->id);
	}

	/**
	 * @param SharingShare $data
	 * @return SharingShare
	 */
	abstract protected function updateShare(array $data): array;

	/**
	 * @param SharingShare $data
	 */
	abstract protected function updateShareExpectConflict(array $data): void;

	public function testUpdateShare(): void {
		$this->register();

		$data = [
			'owner' => [
				'user_id' => $this->owner1->getUID(),
			],
			'sources' => [['type' => TestShareSourceType::class, 'value' => 'source1']],
			'recipients' => [['type' => TestShareRecipientType::class, 'value' => 'recipient1']],
			'properties' => [TestShareFeature::class => ['key1' => ['value1']]],
		];
		$data = $this->manager->completePartialShareData($data);

		$share = Share::fromArray($data);

		$this->manager->insert(new ShareAccessContext(force: true), $share);
		$response = $share->toArray();
		$this->assertArrayHasKey('last_updated', $response);
		$lastUpdated = $response['last_updated'];

		// Updating the share owner can only be reliably tested in the OCC tests, as the change in owner results in the current user not seeing the share anymore.
		$data['sources'] = [['type' => TestShareSourceType2::class, 'value' => 'source2']];
		$data['recipients'] = [['type' => TestShareRecipientType2::class, 'value' => 'recipient2']];
		$data['properties'] = [TestShareFeature2::class => ['key2' => ['value2']]];
		$response = $this->updateShare($data);
		$this->assertArrayHasKey('id', $response);
		unset($response['id']);
		$this->assertArrayHasKey('last_updated', $response);
		$this->assertGreaterThan($lastUpdated, $response['last_updated']);
		unset($response['last_updated']);

		$this->assertEquals([
			'owner' => [
				'user_id' => 'owner1',
				'display_name' => 'Owner 1',
			],
			'sources' => [
				[
					'type' => TestShareSourceType2::class,
					'value' => 'source2',
					'display_name' => 'Source 2',
				],
			],
			'recipients' => [
				[
					'type' => TestShareRecipientType2::class,
					'value' => 'recipient2',
					'display_name' => 'Recipient 2',
				],
			],
			'properties' => [
				TestShareFeature2::class => [
					'key2' => ['value2'],
				],
			],
		], $response);
	}

	public function testUpdateShareConflict(): void {
		$this->register();

		$data = [
			'owner' => [
				'user_id' => $this->owner1->getUID(),
			],
			'sources' => [['type' => TestShareSourceType::class, 'value' => 'source1']],
			'recipients' => [['type' => TestShareRecipientType::class, 'value' => 'recipient1']],
			'properties' => [TestShareFeature::class => ['key1' => ['value1']]],
		];
		$data = $this->manager->completePartialShareData($data);

		$share = Share::fromArray($data);

		$this->manager->insert(new ShareAccessContext(force: true), $share);

		$data['last_updated'] = 123456789;
		$this->updateShareExpectConflict($data);
	}
}
