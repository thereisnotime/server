<?php

/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

declare(strict_types=1);

namespace OCA\Sharing;

use OCA\Sharing\Model\IShareFeature;
use OCA\Sharing\Model\IShareRecipientType;
use OCA\Sharing\Model\IShareSourceType;
use RuntimeException;

class Registry {
	/** @var array<class-string<IShareSourceType>, IShareSourceType> */
	private array $sourceTypes = [];

	/** @var array<class-string<IShareRecipientType>, IShareRecipientType> */
	private array $recipientTypes = [];

	/** @var array<class-string<IShareFeature>, IShareFeature> */
	private array $features = [];

	/** @var array<class-string<IShareFeature>, array<class-string<IShareSourceType>, bool>> */
	private array $featureCompatibleSourceTypes = [];

	/** @var array<class-string<IShareFeature>, array<class-string<IShareRecipientType>, bool>> */
	private array $featureCompatibleRecipientTypes = [];

	public function clear(): void {
		$this->sourceTypes = [];
		$this->recipientTypes = [];
		$this->features = [];
		$this->featureCompatibleSourceTypes = [];
		$this->featureCompatibleRecipientTypes = [];
	}

	public function registerSourceType(IShareSourceType $sourceType): void {
		$class = $sourceType::class;

		if (isset($this->sourceTypes[$class])) {
			throw new RuntimeException('Share source type ' . $class . ' is already registered');
		}

		$this->sourceTypes[$class] = $sourceType;
	}

	public function registerRecipientType(IShareRecipientType $recipientType): void {
		$class = $recipientType::class;

		if (isset($this->recipientTypes[$class])) {
			throw new RuntimeException('Share recipient type ' . $class . ' is already registered');
		}

		$this->recipientTypes[$class] = $recipientType;
	}

	public function registerFeature(IShareFeature $feature): void {
		$class = $feature::class;

		if (isset($this->features[$class])) {
			throw new RuntimeException('Share feature ' . $class . ' is already registered');
		}

		$this->features[$class] = $feature;
	}

	/**
	 * @param class-string<IShareFeature> $feature
	 * @param class-string<IShareSourceType> $sourceType
	 */
	public function registerFeatureCompatibleWithSourceType(string $feature, string $sourceType): void {
		// Because we can't control the order in which apps are booted, we can't ensure that the source type is already registered.
		$this->featureCompatibleSourceTypes[$feature] ??= [];
		$this->featureCompatibleSourceTypes[$feature][$sourceType] = true;
	}

	/**
	 * @param class-string<IShareFeature> $feature
	 * @return list<class-string<IShareSourceType>>
	 */
	public function getSourceTypesCompatibleWithFeature(string $feature): array {
		$sourceTypes = array_keys($this->featureCompatibleSourceTypes[$feature] ?? []);
		foreach ($sourceTypes as $sourceType) {
			if (!isset($this->sourceTypes[$sourceType])) {
				// Because we can't control the order in which apps are booted, we need to check now if it has been registered.
				throw new RuntimeException('Share source type ' . $sourceType . ' is not registered');
			}
		}

		return $sourceTypes;
	}

	/**
	 * @param class-string<IShareFeature> $feature
	 * @param class-string<IShareRecipientType> $recipientType
	 */
	public function registerFeatureCompatibleWithRecipientType(string $feature, string $recipientType): void {
		// Because we can't control the order in which apps are booted, we can't ensure that the source type is already registered.
		$this->featureCompatibleRecipientTypes[$feature] ??= [];
		$this->featureCompatibleRecipientTypes[$feature][$recipientType] = true;
	}

	/**
	 * @param class-string<IShareFeature> $feature
	 * @return list<class-string<IShareRecipientType>>
	 */
	public function getRecipientTypesCompatibleWithFeature(string $feature): array {
		$recipientTypes = array_keys($this->featureCompatibleRecipientTypes[$feature] ?? []);
		foreach ($recipientTypes as $recipientType) {
			if (!isset($this->recipientTypes[$recipientType])) {
				// Because we can't control the order in which apps are booted, we need to check now if it has been registered.
				throw new RuntimeException('Share recipient type ' . $recipientType . ' is not registered');
			}
		}

		return $recipientTypes;
	}

	/**
	 * @return array<class-string<IShareSourceType>, IShareSourceType>
	 */
	public function getSourceTypes(): array {
		return $this->sourceTypes;
	}

	/**
	 * @return array<class-string<IShareRecipientType>, IShareRecipientType>
	 */
	public function getRecipientTypes(): array {
		return $this->recipientTypes;
	}

	/**
	 * @return array<class-string<IShareFeature>, IShareFeature>
	 */
	public function getFeatures(): array {
		return $this->features;
	}
}
