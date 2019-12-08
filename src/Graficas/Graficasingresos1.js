/* import React from 'react';
import '../styles/morris.css';
import '../styles/morris.min.js';
//import '../Graficas/GraficasIngresos';
class GraficasIngresos extends React.Component {

    render() {
        return (
            <React.Fragment>
                <title>Ingresos</title>
                <div className="container"></div>
                <h1>Ingresos línea</h1>
                <div>
                    <hr>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Ingresos área</h2>
                                <hr>
                                    <div id="myfirstchart"></div>

                                    <div className="col-md-6">


                                    </div>
                                </hr>

                            </div>
                        </div>

                    </hr>
                </div>

            </React.Fragment>
        )
    }
}
new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2008', value: 20 },
        { year: '2009', value: 10 },
        { year: '2010', value: 5 },
        { year: '2011', value: 5 },
        { year: '2012', value: 20 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});
export default GraficasIngresos; */