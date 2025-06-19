import { TbMeasure } from '@shared/models/unit.models';
export type DataTransferRateUnits = 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps' | 'B/s' | 'KB/s' | 'MB/s' | 'GB/s';
declare const measure: TbMeasure<DataTransferRateUnits>;
export default measure;
