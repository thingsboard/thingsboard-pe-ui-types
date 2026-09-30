import { SubscriptionUpdate } from '@shared/models/telemetry/telemetry.models';
export declare const METRIC_KEY_CPU_PERCENT = "cpuPercent";
export declare const METRIC_KEY_MEMORY_BYTES = "memoryBytes";
export declare const METRIC_KEY_ONLINE_CPUS = "onlineCpus";
export declare const METRIC_KEY_HOST_MEMORY_BYTES = "hostMemoryBytes";
export declare const METRIC_KEY_DISK_BYTES = "diskBytes";
export declare const METRIC_KEY_HOST_DISK_TOTAL = "hostDiskTotal";
export declare const METRIC_KEY_VOLUME_BYTES = "volumeBytes";
export declare const METRIC_KEY_SIZE_BYTES = "sizeBytes";
export declare const ENTITY_METRIC_KEYS: string[];
export declare const AGENT_NORMALIZATION_KEYS: string[];
export interface MetricsSnapshot {
    cpuPercent: number | null;
    cpuPercentTs: number | null;
    memoryBytes: number | null;
    memoryBytesTs: number | null;
    onlineCpus: number | null;
    hostMemoryBytes: number | null;
    diskBytes: number | null;
    diskBytesTs: number | null;
    hostDiskTotal: number | null;
    volumeBytes: number | null;
    volumeBytesTs: number | null;
    /** Unified per-entity storage byte count. For AgentApp entities this is
     *  volumeBytes (sum of project's volumes). For volume-typed AgentAppUnit
     *  entities this is sizeBytes (the volume's own size). Lets the multi-entity
     *  chart panel plot a single "Storage" stack regardless of entity type. */
    storageBytes: number | null;
    storageBytesTs: number | null;
}
export declare const EMPTY_METRICS_SNAPSHOT: MetricsSnapshot;
export declare function formatCpu(cpuPercent: number | null, onlineCpus: number | null): string;
export declare function formatBytes(bytes: number | null, fractionDigits?: number): string;
export declare const CPU_EMPTY_AXIS_MAX = 100;
export declare const BYTES_EMPTY_AXIS_MAX: number;
export declare function emptyAxisMax(fallback: number): (value: {
    min: number;
    max: number;
}) => number | null;
export declare function formatMemoryWithMax(memoryBytes: number | null, hostMemoryBytes: number | null): string;
export declare function memoryHostPercent(memoryBytes: number | null, hostMemoryBytes: number | null): number | null;
export declare function formatDiskWithMax(diskBytes: number | null, hostDiskTotal: number | null): string;
export declare function diskHostPercent(diskBytes: number | null, hostDiskTotal: number | null): number | null;
export interface LatestValues {
    [key: string]: LatestPoint | null;
}
export interface LatestPoint {
    value: number;
    ts: number;
}
export declare function pickLatest(update: SubscriptionUpdate | null, key: string): LatestPoint | null;
export declare function formatUpdatedAt(ts: number | null): string | null;
