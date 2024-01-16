import {FC, Fragment, useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {getAllUsers} from "../api/user.api";

interface TotalType {
    pageSize: number;
    currentPage: number;
}

const UsersComponent: FC<any> = () => {
    const [total, setTotal] = useState<TotalType>({pageSize: 0, currentPage: 0})
    const [rows, setRows] = useState<any[]>([])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70},
        { field: 'email', headerName: 'Email', width: 230 },
        { field: 'roles', headerName: 'Roles', width: 230 },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = {
                    page: 1,
                    item_per_page: 5,
                    keyWords: ""
                };
                const result: any = await getAllUsers(query);
                console.log(result.data, "result.data")
                setRows(result.data.rows)
                setTotal({currentPage : result.data.currentPage, pageSize: result.data.total})
            } catch (error) {
                console.error(error);
            }
        };
        fetchData().then();
    }, []);
    return (
        <Fragment>
            <div style={{height: 500, width: '50%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: total.currentPage, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5,10]}
            />
            </div>
        </Fragment>
    )
}

export default UsersComponent;