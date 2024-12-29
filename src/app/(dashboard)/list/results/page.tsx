import TableSearch from "@/components/TableSearch"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import Image from "next/image"
import Link from "next/link"
import { resultsData, role } from "@/lib/data"

type Result = {
  id:number;
  subject:string;
  class:string;
  teacher:string;
  student:string;
  type:"exam" | "assignment";
  date:string;
  score:number;
}

const columns = [
  {
    header: "Class Name",
    accessor: "name"
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell"
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell"
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell"
  },
  {
    header: "Date",
    accessor: "Date",
    className: "hidden md:table-cell"
  },
  {
    header: "Actions",
    accessor: "action",
  },
]

const ResultListPage = () => {

  const renderRow = (item:Result) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-starPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.student}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-starSky">
            <Image src='/edit.png' alt="edit" width={16} height={16} />
          </button>
          </Link>
          {
            role === "admin" && (
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-starPurple">
                <Image src='/delete.png' alt="delete" width={16} height={16} />
              </button>
            )
          }
        </div>
      </td>
    </tr>
  );

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-starYellow">
              <Image src='/filter.png' alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-starYellow">
              <Image src='/sort.png' alt="filter" width={14} height={14} />
            </button>
            {role === "admin" && (
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-starYellow">
              <Image src='/plus.png' alt="filter" width={14} height={14} />
            </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={resultsData} />
      </div>
      {/* PAGINATION */}
      <div className="">
        <Pagination />
      </div>
    </div>
  )
}

export default ResultListPage