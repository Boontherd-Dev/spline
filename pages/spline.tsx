import Spline from '@splinetool/react-spline';

const SplineRender = () => {
    return (
        <div style={{background:'red' ,height:'100vh'}}>
            <Spline  style={{height:'100vh'}} scene="https://prod.spline.design/MDVA5zD880WEqmvx/scene.splinecode" />
        </div>
    );
}

export default SplineRender