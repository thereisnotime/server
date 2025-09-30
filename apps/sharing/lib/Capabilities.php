<?php

/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

declare(strict_types=1);

namespace OCA\Sharing;

use OCA\Sharing\AppInfo\Application;
use OCA\Sharing\Model\IShareFeature;
use OCA\Sharing\Model\IShareRecipientType;
use OCA\Sharing\Model\IShareSourceType;
use OCP\Capabilities\ICapability;

class Capabilities implements ICapability {
	public function __construct(
		private readonly Registry $registry,
	) {
	}

	/**
	 * @return array{
	 *     sharing: array{
	 *         api_versions: list<'v1'>,
	 *         source_types: array<class-string<IShareSourceType>, non-empty-string>,
	 *         recipient_types: array<class-string<IShareRecipientType>, non-empty-string>,
	 *         features: array<class-string<IShareFeature>, array{
	 *             compatible_source_types: list<class-string<IShareSourceType>>,
	 *             compatible_recipient_types: list<class-string<IShareRecipientType>>,
	 *         }>,
	 *     },
	 * }
	 */
	public function getCapabilities(): array {
		return [
			Application::APP_ID => [
				'api_versions' => ['v1'],
				'source_types' => array_map(static fn (IShareSourceType $sourceType): string => $sourceType->getDisplayName(), $this->registry->getSourceTypes()),
				'recipient_types' => array_map(static fn (IShareRecipientType $recipientType): string => $recipientType->getDisplayName(), $this->registry->getRecipientTypes()),
				'features' => array_map(fn (IShareFeature $feature): array => [
					'compatible_source_types' => $this->registry->getSourceTypesCompatibleWithFeature($feature::class),
					'compatible_recipient_types' => $this->registry->getRecipientTypesCompatibleWithFeature($feature::class),
				], $this->registry->getFeatures()),
			],
		];
	}
}
