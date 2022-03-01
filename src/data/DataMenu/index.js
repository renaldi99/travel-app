import React from 'react';
import {IconFaq, IconHistory, IconPassword, IconSupport} from '../../assets';

export const DataMenu = [
  {
    id: 1,
    name: 'Trip History',
    icon: <IconHistory />,
    halaman: 'TripHistory',
  },
  {
    id: 2,
    name: 'Change Password',
    icon: <IconPassword />,
    halaman: 'ChangePassword',
  },
  {
    id: 3,
    name: 'FAQ',
    icon: <IconFaq />,
    halaman: 'AskedQuestion',
  },
  {
    id: 4,
    name: 'Support Center',
    icon: <IconSupport />,
    halaman: 'SupportCenter',
  },
];
