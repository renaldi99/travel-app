import React from 'react';
import {IconDinner, IconFlight, IconHotel, IconTrain} from '../../assets';
import {colors} from '../../utils';

export const DataCategory = [
  {
    id: 1,
    name: 'Travel',
    icon: <IconHotel />,
    colorCard: colors.colorPrimary,
  },
  {
    id: 2,
    name: 'Hotel',
    icon: <IconHotel />,
    colorCard: colors.purple,
  },
  {
    id: 3,
    name: 'Food',
    icon: <IconDinner />,
    colorCard: colors.yellow,
  },
  {
    id: 4,
    name: 'Flight',
    icon: <IconFlight />,
    colorCard: colors.green,
  },
];
