import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo'
import '../css/page/home.css'
import { userData } from "../dummyData";
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';
import Chart2 from '../components/Chart2';
import Chart3 from '../components/Chart3';

function Home() {
  return (
    <div className="home">
      <Chart2/>
      <Chart3/>
    </div>
  );
}

export default Home;