import { SetMetadata } from '@nestjs/common';

export const INTERVAL_HOST_KEY = 'INTERVAL_HOST_KEY';

export const IntervalHost = () => SetMetadata(INTERVAL_HOST_KEY, true);
