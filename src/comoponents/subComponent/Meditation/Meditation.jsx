import React from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material';

function Meditation() {
    return (
        <Card style={{ width: '920px', height: '320px', display: 'flex' }}>
            <Grid container>
                <Grid item xs={8}>
                    <CardContent style={{ position: 'relative' }}>
                        <img
                            src=""
                            alt=""
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </CardContent>
                </Grid>
                <Grid item xs={4}>
                    <CardContent style={{ position: 'relative' }}>
                        <img
                            src=""
                            alt=""
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Meditation