import React from 'react';
import styled from 'styled-components';

const TableRow = styled.tr`
  color: gray;
  height: 50px;
`;

const TrCell = styled.td`
  padding-left: 8px;
  width: 200px;
`;

const TrCellLeft = styled(TrCell)`
  padding-left: 40px;
  width: 140px;
`;

const TrCellRight = styled(TrCell)`
  padding-right: 40px;
  width: 360px;
`;

export default function RaceTableRow(props) {
  var {
    name,
    number,
    timestamp,
  } = props;

  return (
    <TableRow>
      <TrCellLeft>{number}</TrCellLeft>
      <TrCell>{name}</TrCell>
      <TrCellRight>{timestamp}</TrCellRight>
    </TableRow>
  );
}
