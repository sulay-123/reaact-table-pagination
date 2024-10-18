import React from 'react';

interface TableComponentProps<T> {
  headers: string[];
  data: T[];
}

const TableComponent = <T extends object>({ headers, data }: TableComponentProps<T>) => {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, headerIndex) => (
                  <td key={headerIndex}>
                    {row[header.toLowerCase() as keyof T] as unknown as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
