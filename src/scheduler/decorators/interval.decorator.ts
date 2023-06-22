import { SetMetadata } from '@nestjs/common';

export const INTERVAL_KEY = 'INTERVAL_KEY';

export const Interval = (time: number) => SetMetadata(INTERVAL_KEY, time);
