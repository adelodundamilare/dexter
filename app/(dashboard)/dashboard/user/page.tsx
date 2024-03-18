import { columns } from "@/components/tables/user-tables/columns";
import * as userActions from "@/actions/user";
import { DataTable } from "@/components/ui/data-table";
import { IMeta, IUser } from "@/constants/types";

interface IParams {
  page: number;
}
interface Props {
  searchParams: IParams;
}

export default async function page({ searchParams }: Props) {
  const page = searchParams.page ?? 1;

  let users: IUser[] = [];
  let meta: IMeta = {
    total: 0,
    per_page: 0,
    current_page: 0,
    last_page: 0,
    from: 0,
    to: 0,
  };

  try {
    const data = await userActions.all({ page });
    users = data.data;
    meta = data.meta;
  } catch (error) {
    console.log({ error });
  }

  return (
    <>
      <DataTable columns={columns} data={users} meta={meta} />
    </>
  );
}
