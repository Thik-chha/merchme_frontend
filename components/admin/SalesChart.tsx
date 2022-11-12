import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'January',
        shirt: 4000,
        sticker: 2400,
        amt: 2400,
    },
    {
        name: 'Feburary',
        shirt: 1000,
        sticker: 2400,
        amt: 2210,
    },
    {
        name: 'March',
        shirt: 2300,
        sticker: 2700,
        amt: 2290,
    },
    {
        name: 'April',
        shirt: 3000,
        sticker: 200,
        amt: 2000,
    },
    {
        name: 'May',
        shirt: 1000,
        sticker: 1400,
        amt: 2181,
    },
    {
        name: 'June',
        shirt: 2000,
        sticker: 2400,
        amt: 2500,
    },
    {
        name: 'July',
        shirt: 3000,
        sticker: 2400,
        amt: 2100,
    },
];

export const SalesChart = () => {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type='monotone'
                    dataKey='sticker'
                    stroke='#7f7aff'
                    activeDot={{ r: 8 }}
                />
                <Line type='monotone' dataKey='shirt' stroke='#82ca9d' />
            </LineChart>
        </ResponsiveContainer>
    );
};
