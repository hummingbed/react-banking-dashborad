import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const ChartComponent = () => {

    const data = [
        {
            name: 'Dec 2',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Dec 3',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Dec 4',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Dec 5',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Dec 6',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Dec 7',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Dec 8',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div>
            <div className="row overflow-auto " style={{ width: '675px' }}>
                <div className="col">
                    <p className="font-sixteen">Money Flow</p>
                </div>

                <div className="col text-end font-ten">
                    <i className="fa fa-line-chart text-muted mx-3" aria-hidden="true"></i>
                    <i className="fa fa-signal bg-primary px-1 py-1 rounded text-white" aria-hidden="true"></i>
                </div>
            </div>

            <div className="row font-ten" style={{ width: '675px' }}>
                <div className="col">
                    <div className="d-flex gap-3">
                        <i className="fa fa-line-chart text-white p-1 rounded-circle bg-primary me-1" aria-hidden="true"></i>savings
                        <i className="fa fa-line-chart text-primary p-1" aria-hidden="true"></i> <span>+6.79 %</span>
                    </div>
                </div>

                <div className="col">
                    <div className="row justify-content-end">
                        <div className="border rounded-pill border col-3 ">
                            <span>week</span>
                            <span type="button" className="text-muted dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"></span>

                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#hello">Action</a></li>
                                <li><a className="dropdown-item" href="#hello">Another action</a></li>
                                <li><a className="dropdown-item" href="#hello">Something else here</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#hello">Separated link</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <LineChart
                width={689}
                height={250}
                data={data}
                syncId="anyId"
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="blue" fill="#82ca9d" />
            </LineChart>

        </div>
    );
}

export default ChartComponent;



