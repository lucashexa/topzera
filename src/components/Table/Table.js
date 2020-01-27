import * as React from 'react'
import { useEffect, useState } from 'react'
import { useTable, useSortBy, useRowSelect, useResizeColumns } from 'react-table' //useBlockLayout
import style from './Table.scss';
import arrow from './arrow.png'
import Dropdown from '../Dropdown'


const App = ({columns, selectOptions, dataRows}) => {

  

  const [data, setData] = useState([])

  console.log(selectOptions)

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    setData(dataRows)
  }, [])

  function Table({ columns, data }) {

    const defaultColumn = React.useMemo(
      () => ({
        minWidth: 90,
        width: 150,
        maxWidth: 400,
      }),
      []
    )

    const IndeterminateCheckbox = React.forwardRef(
      ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
          resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
          <input type="checkbox" ref={resolvedRef} {...rest} />
        )
      }
    )

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      rows,
      prepareRow,
      state: { selectedRowIds },
    } = useTable({
      columns,
      data,
      //defaultColumn,
    },
      useSortBy,
      useResizeColumns,
      useRowSelect,
      useBlockLayout,
      hooks => { selectOptions && 
        hooks.flatColumns.push(columns => [
          ...columns,
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (<div></div>),
            Cell: ({ row }) => (
              <div>
                <label>
                  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                </label>
              </div>
            ),
            Footer: () => (
              <div >
                <label onClick={addUser} />
              </div>
            ),
          },
        ])
      }
    )


    // Refactor
    let newRow = {}

    let objj = []
    const rowToState = (column, e, t) => {

      const json = `{"${column}":${e.currentTarget.value}}`
      const obj = JSON.parse(json);

      objj.push(obj)

      newRow = objj.reduce(
        function (reduced, next) {
          Object.keys(next).forEach(function (key) { reduced[key] = next[key]; });
          return reduced;
        }
      );
    }


    Object.size = function (obj) {
      var size = 0, key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };


    const addUser = () => {
      let count = 0

      Object.values(newRow).forEach(e => {
        count++;

        if (count == (Object.size(columns))) {
          setData([...data, newRow])
        }
      });

    }

    //Removing iten from Table by ID
    const id = Object.keys(selectedRowIds).toString()

    if (id) {
      setData([...data].filter((_, i) => i !== +id))
    }

    const downArrow = {
      transform: 'rotate(-90deg)'
    }
    const upArrow = {
      transform: 'rotate(90deg)'
    }

    return (
      <div>
        <div className={style['table']} {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <div className={style['tr']} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <div className={style['th']} {...column.getHeaderProps(
                    column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <div
                      {...column.getResizerProps()}
                      className={style['resizer']}
                     />
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <img src={arrow} height={12} style={downArrow} />
                          : <img src={arrow} height={12} style={upArrow} /> : ''}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </thead>
          <div className={style['tbody']} {...getTableBodyProps()}>
            {rows.map(
              (row, i) => {
                prepareRow(row);
                return (
                  <div className={style['tr']} {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <div className={style['td']} {...cell.getCellProps()}>{cell.render('Cell')}</div>
                    })}
                  </div>
                )
              }
            )}
          </div>
          { selectOptions && <tfoot>
            {footerGroups.map(group => (
              <tr {...group.getFooterGroupProps()}>
                {group.headers.map(column => (
                  <td {...column.getFooterProps()}>{column.render('Footer')}
                    <Dropdown required options={selectOptions} change={(e) => rowToState(column.id, e, group.headers)} />
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>}
        </div>
      </div>
    )
  }

  return (
    <div className={style['ct']}>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default App
