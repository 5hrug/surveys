import React from 'react';
import styled from 'styled-components';
import { useTable, useSortBy } from 'react-table';
import { v4 as uuidv4 } from 'uuid';

// import makeData from './makeData';

const Styles = styled.div`
   padding: 1rem;

   table {
      border-spacing: 0;
      border: 1px solid black;

      tr {
         :last-child {
            td {
               border-bottom: 0;
            }
         }
      }

      th,
      td {
         margin: 0;
         padding: 0.5rem;
         border-bottom: 1px solid black;
         border-right: 1px solid black;

         :last-child {
            border-right: 0;
         }
      }
   }
`;

function Table({ columns, data }) {
   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable(
         {
            columns,
            data,
         },
         useSortBy
      );

   // We don't want to render all 2000 rows for this example, so cap
   // it at 20 for this use case
   const firstPageRows = rows.slice(0, 20);

   return (
      <>
         <table {...getTableProps()}>
            <thead>
               {headerGroups.map((headerGroup) => (
                  <tr key={uuidv4()} {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map((column) => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                           key={uuidv4()}
                           {...column.getHeaderProps(
                              column.getSortByToggleProps()
                           )}>
                           {column.render('Header')}
                           {/* Add a sort direction indicator */}
                           <span>
                              {column.isSorted
                                 ? column.isSortedDesc
                                    ? ' 🔽'
                                    : ' 🔼'
                                 : ''}
                           </span>
                        </th>
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {firstPageRows.map((row, i) => {
                  prepareRow(row);
                  return (
                     <tr key={uuidv4()} {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                           return (
                              <td key={uuidv4()} {...cell.getCellProps()}>
                                 {cell.render('Cell')}
                              </td>
                           );
                        })}
                     </tr>
                  );
               })}
            </tbody>
         </table>
         <br />
         <div>Showing the first 20 results of {rows.length} rows</div>
      </>
   );
}
    
export function Rt() {
    const data = React.useMemo(
       () => [
          {
             col1: 'Hello',
             col2: 'World',
          },
          {
             col1: 'react-table',
             col2: 'rocks',
          },
          {
             col1: 'whatever',
             col2: 'you want',
          },
       ],
       []
    );
    const columns = React.useMemo(
        () => [
           {
              Header: 'Column 1',
              accessor: 'col1', // accessor is the "key" in the data
           },
           {
              Header: 'Column 2',
              accessor: 'col2',
           },
        ],
        []
     );

//    const columns = React.useMemo(
//       () => [
//          {
//             Header: 'Name',
//             columns: [
//                {
//                   Header: 'First Name',
//                   accessor: 'firstName',
//                },
//                {
//                   Header: 'Last Name',
//                   accessor: 'lastName',
//                },
//             ],
//          },
//          {
//             Header: 'Info',
//             columns: [
//                {
//                   Header: 'Age',
//                   accessor: 'age',
//                },
//                {
//                   Header: 'Visits',
//                   accessor: 'visits',
//                },
//                {
//                   Header: 'Status',
//                   accessor: 'status',
//                },
//                {
//                   Header: 'Profile Progress',
//                   accessor: 'progress',
//                },
//             ],
//          },
//       ],
//       []
//    );

//    const data = React.useMemo(() => makeData(2000), []);

   return (
      <Styles>
         <Table columns={columns} data={data} />
      </Styles>
   );
}

export default Rt;