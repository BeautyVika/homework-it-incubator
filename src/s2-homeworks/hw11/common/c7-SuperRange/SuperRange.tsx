import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: '147px',

                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    border: "solid 5px white",
                    outline: "solid 2px #00CC22"
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
