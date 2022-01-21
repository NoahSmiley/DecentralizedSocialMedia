import { Nav } from 'react-bootstrap';
import logo from './img.png'
import NavigationBar from './NavigationBar';
import BasicTimeline from './BasicTimeline';
const Landingpage = () => {
  return (
    <div>
        <NavigationBar/>
        <BasicTimeline/>
    </div>
  );
};
export default Landingpage;
