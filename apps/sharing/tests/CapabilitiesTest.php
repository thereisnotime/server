<?php

/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

declare(strict_types=1);


use OCA\Sharing\AppInfo\Application;
use OCA\Sharing\Capabilities;
use OCA\Sharing\Registry;
use OCA\Sharing\Tests\TestShareFeature;
use OCA\Sharing\Tests\TestShareFeature2;
use OCA\Sharing\Tests\TestShareRecipientType;
use OCA\Sharing\Tests\TestShareRecipientType2;
use OCA\Sharing\Tests\TestShareSourceType;
use OCA\Sharing\Tests\TestShareSourceType2;
use OCP\Server;
use Test\TestCase;

class CapabilitiesTest extends TestCase {
	private Registry $registry;

	private Capabilities $capabilities;

	public function setUp(): void {
		parent::setUp();

		$this->registry = Server::get(Registry::class);

		$this->capabilities = Server::get(Capabilities::class);
	}

	protected function tearDown(): void {
		$this->registry->clear();

		parent::tearDown();
	}

	public function testGetCapabilities(): void {
		$this->registry->registerSourceType(new TestShareSourceType([]));
		$this->registry->registerSourceType(new TestShareSourceType2([]));
		$this->registry->registerRecipientType(new TestShareRecipientType([], [], []));
		$this->registry->registerRecipientType(new TestShareRecipientType2([], [], []));
		$this->registry->registerFeature(new TestShareFeature([]));
		$this->registry->registerFeatureCompatibleWithSourceType(TestShareFeature::class, TestShareSourceType::class);
		$this->registry->registerFeatureCompatibleWithRecipientType(TestShareFeature::class, TestShareRecipientType::class);
		$this->registry->registerFeature(new TestShareFeature2([]));
		$this->registry->registerFeatureCompatibleWithSourceType(TestShareFeature2::class, TestShareSourceType2::class);
		$this->registry->registerFeatureCompatibleWithRecipientType(TestShareFeature2::class, TestShareRecipientType2::class);


		$this->assertEquals(
			[
				Application::APP_ID => [
					'api_versions' => ['v1'],
					'source_types' => [
						TestShareSourceType::class => 'TestShareSourceType',
						TestShareSourceType2::class => 'TestShareSourceType2',
					],
					'recipient_types' => [
						TestShareRecipientType::class => 'TestShareRecipientType',
						TestShareRecipientType2::class => 'TestShareRecipientType2',
					],
					'features' => [
						TestShareFeature::class => [
							'compatible_source_types' => [TestShareSourceType::class],
							'compatible_recipient_types' => [TestShareRecipientType::class],
						],
						TestShareFeature2::class => [
							'compatible_source_types' => [TestShareSourceType2::class],
							'compatible_recipient_types' => [TestShareRecipientType2::class],
						],
					],
				],
			],
			$this->capabilities->getCapabilities(),
		);
	}
}
