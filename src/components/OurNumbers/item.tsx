import React, { ReactNode } from 'react';
import { Number } from './number';
import { Text } from './text';
import CountUp from 'react-countup';

const Item = ({
  icon,
  number,
  text,
}: {
  icon?: ReactNode;
  number: number;
  text: string;
}) => {
  return (
    <>
      {icon}
      <Number>
        <CountUp end={number} duration={3} />
      </Number>
      <Text>{text}</Text>
    </>
  );
};

export { Item };
