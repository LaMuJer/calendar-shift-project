import { lists } from "../utils/constant";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Descriptions = () => {
    return (
        <Stack sx={{
            display: 'felx',
            width: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '30px',
            bgcolor: 'pink'
        }} >
            <Box sx={{
                width: '40vw',
                height: '100%',
                bgcolor: '#f1faee',
                borderRadius: '15px'
            }}>
                {lists.map(({ shift, duration, icon, style }, index) => {
                    return (
                        <Stack key={index} sx={{
                            display: 'felx',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '20px'
                            }}>
                                <span style={{ width: '40%', fontWeight: '500' }}>{shift} </span>
                                <span style={{ width: '40%', fontWeight: '400' }}>{duration} </span>
                                <span style={{ color: style }}>{React.createElement(icon)}</span>
                            </div>
                        </Stack>
                    );
                })}
            </Box>
            
        </Stack>
    )
}

export default Descriptions