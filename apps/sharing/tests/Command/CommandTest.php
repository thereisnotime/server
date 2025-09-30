<?php

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

declare(strict_types=1);

use OCA\Sharing\Command\Create;
use OCA\Sharing\Command\Delete;
use OCA\Sharing\Command\Get;
use OCA\Sharing\Command\Update;
use OCA\Sharing\Model\Share;
use OCA\Sharing\Model\ShareAccessContext;
use OCA\Sharing\ResponseDefinitions;
use OCA\Sharing\Tests\AbstractApiTests;
use OCA\Sharing\Tests\TestShareFeature;
use OCA\Sharing\Tests\TestShareRecipientType;
use OCA\Sharing\Tests\TestShareSourceType;
use OCP\Server;
use PHPUnit\Framework\Attributes\Group;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\Console\Input\Input;
use Symfony\Component\Console\Output\Output;

/**
 * @psalm-import-type SharingShare from ResponseDefinitions
 */
#[Group(name: 'DB')]
class CommandTest extends AbstractApiTests {
	private Input&MockObject $input;

	private Output&MockObject $output;

	private string $stdout = '';

	public function setUp(): void {
		parent::setUp();

		$this->input = $this->createMock(Input::class);

		$this->output = $this->createMock(Output::class);
		$this->output
			->method('writeln')
			->willReturnCallback(function (string $message): void {
				$this->stdout .= $message . "\n";
			});
	}

	protected function createShare(array $data): array {
		$this->input
			->expects($this->once())
			->method('getArgument')
			->with('data')
			->willReturn(json_encode($data, JSON_THROW_ON_ERROR));

		$exitCode = Server::get(Create::class)->execute($this->input, $this->output);
		$this->assertEquals(0, $exitCode);

		/** @var SharingShare $out */
		$out = json_decode($this->stdout, true, 512, JSON_THROW_ON_ERROR);

		return $out;
	}

	protected function getShare(string $shareID): array {
		$this->input
			->expects($this->once())
			->method('getArgument')
			->with('id')
			->willReturn($shareID);

		$exitCode = Server::get(Get::class)->execute($this->input, $this->output);
		$this->assertEquals(0, $exitCode);

		/** @var SharingShare $out */
		$out = json_decode($this->stdout, true, 512, JSON_THROW_ON_ERROR);

		return $out;
	}

	protected function deleteShare(string $shareID): void {
		$this->input
			->expects($this->once())
			->method('getArgument')
			->with('id')
			->willReturn($shareID);

		$exitCode = Server::get(Delete::class)->execute($this->input, $this->output);
		$this->assertEquals(0, $exitCode);
	}

	protected function updateShare(array $data): array {
		$this->input
			->expects($this->once())
			->method('getArgument')
			->with('data')
			->willReturn(json_encode($data, JSON_THROW_ON_ERROR));

		$exitCode = Server::get(Update::class)->execute($this->input, $this->output);
		$this->assertEquals(0, $exitCode);

		/** @var SharingShare $out */
		$out = json_decode($this->stdout, true, 512, JSON_THROW_ON_ERROR);

		return $out;
	}

	protected function updateShareExpectConflict(array $data): void {
		$this->input
			->expects($this->once())
			->method('getArgument')
			->with('data')
			->willReturn(json_encode($data, JSON_THROW_ON_ERROR));

		$exitCode = Server::get(Update::class)->execute($this->input, $this->output);
		$this->assertEquals(1, $exitCode);
		$this->assertEquals("The share has been updated in the meantime, so you cannot update it.\n", $this->stdout);
	}

	public function testUpdateShareOwner(): void {
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
		$data['owner'] = ['user_id' => $this->owner2->getUID()];
		$response = $this->updateShare($data);
		$this->assertArrayHasKey('id', $response);
		unset($response['id']);
		$this->assertArrayHasKey('last_updated', $response);
		$this->assertGreaterThan($lastUpdated, $response['last_updated']);
		unset($response['last_updated']);

		$this->assertEquals([
			'owner' => [
				'user_id' => 'owner2',
				'display_name' => 'Owner 2',
			],
			'sources' => [
				[
					'type' => TestShareSourceType::class,
					'value' => 'source1',
					'display_name' => 'Source 1',
				],
			],
			'recipients' => [
				[
					'type' => TestShareRecipientType::class,
					'value' => 'recipient1',
					'display_name' => 'Recipient 1',
				],
			],
			'properties' => [
				TestShareFeature::class => [
					'key1' => ['value1'],
				],
			],
		], $response);
	}
}
