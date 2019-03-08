import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
  width: 800px;
`;

const TableBody = styled.tbody`
  tr:nth-child(2n) {
    background-color: #f5f5f5;
  }
`;

const TableBodyWrapper = styled.div`
  height: calc(100% - 60px);
  overflow: scroll;
`;

const TableHead = styled.tr`
  background: #36304a;
  height: 60px;
`;

const ThCell = styled.th`
  color: #fff;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.2;
  padding-left: 8px;
  text-align: left;
  width: 200px;
`;

const ThCellLeft = styled(ThCell)`
  padding-left: 40px;
  width: 140px;
`;

const ThCellRight = styled(ThCell)`
  padding-right: 40px;
  width: 360px;
`;

export default function RaceTable(props) {
  return (
    <>
      <Table>
        <thead>
          <TableHead>
            <ThCellLeft>Number</ThCellLeft>
            <ThCell>Name</ThCell>
            <ThCellRight>Finish Time</ThCellRight>
          </TableHead>
        </thead>
      </Table>
      <TableBodyWrapper>
        <Table>
          <TableBody>
            {props.children}
          </TableBody>
        </Table>
      </TableBodyWrapper>
    </>
  );
}
