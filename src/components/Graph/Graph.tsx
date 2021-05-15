import { Typography, Paper } from '@material-ui/core';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { CarbonData } from 'interfaces';
import useStyles from './Graph-styles';
import React from 'react';

export interface Props {
  carbonData: CarbonData[]
}

const Graph: React.FC<Props> = ({ carbonData }) => {
  const classes = useStyles();

  type TooltipArgs = { active?: any, payload?: any, label?: any };
  function CustomTooltip ({ active, payload, label }: TooltipArgs) {
    if (active && payload && payload.length) {
      console.log(label);
      return (
        <Paper className={classes.paper}>
            <Typography variant='h6'>{label}</Typography>
            <Typography variant='subtitle2'>{`Carbon Emission (kg): ${parseFloat(payload[0].payload.carbon).toLocaleString()}`}</Typography>
            <Typography variant='subtitle2'>{`Time Entered: ${payload[0].payload.time}`}</Typography>
        </Paper>
      );
    }
    return null;
  };

  return (
    <>
      <Typography variant='h4' color='primary' className={classes.graphHeader}>Carbon Usage (kg)</Typography>
      <ResponsiveContainer width={700} height="60%">
        <LineChart width={900} height={450} data={carbonData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="carbon" stroke={'#0a064a'} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis tickFormatter={tick => tick.toLocaleString()} width={80} domain={[0, 'dataMax + 10']}/>
          <Tooltip content={<CustomTooltip/>}/>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default React.memo(Graph, (prev, next) => {
  const prevData = prev.carbonData;
  const nextData = next.carbonData;

  prevData.forEach((prev, ind) => {
    if (nextData[ind].carbon !== prev.carbon) return false;
  })

  return true;
});