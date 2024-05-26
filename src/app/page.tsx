import { tripBuddies } from "@/components/home/home.constant";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import { Button } from "@/components/ui/button";
import About from "../components/home/about";
import ActivityCard from "../components/home/activity-card";
import FlightCard from "../components/home/flight-card";
import HotelCard from "../components/home/hotel-card";
import InfoCard from "../components/home/info-card";
import ListLayout from "../components/home/list-layout";

export default function Home() {
  return (
    <div className="lg:w-5/6 bg-white p-4">
      <div className="relative">
        <img src="/assets/banner.svg" alt="banner" />
        <Button className="bg-white/20 absolute top-5 left-5">
          <ArrowLeftIcon color="#111" />
        </Button>
      </div>

      <About />

      <div className="w-full flex justify-between items-start">
        <div className="md:flex hidden items-start gap-2">
          <InfoCard
            title="Activites"
            description="Build, personalize, and optimize your itineraries with our trip planner."
            theme={{
              bg: "bg-primary-1100",
              text: "text-white",
              buttonBg: "bg-primary-600",
              buttonTextColor: "text-white",
            }}
          />

          <InfoCard
            title="Hotels"
            description="Build, personalize, and optimize your itineraries with our trip planner."
            theme={{
              bg: "bg-primary-100",
              text: "text-black",
              buttonBg: "bg-primary-600",
              buttonTextColor: "text-white",
            }}
          />

          <InfoCard
            title="Flights"
            description="Build, personalize, and optimize your itineraries with our trip planner."
            theme={{
              bg: "bg-primary-600",
              text: "text-white",
              buttonBg: "bg-white",
              buttonTextColor: "text-primary-600",
            }}
          />
        </div>

        <div className="flex items-center px-2 divide-x-2">
          <img
            src={tripBuddies[0].image}
            alt={tripBuddies[0].name}
            className="w-10 h-10 object-cover rounded-full"
          />

          <div className="w-8 h-0.5 bg-primary-100"></div>

          <img
            src="/assets/gearsix.svg"
            alt="gear six icon"
            className="p-3 border-2 border-primary-100 rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col justify-start items-start pt-8 pb-6">
        <p className="font-semibold text-xl">Trip Itineraries</p>
        <p className="font-medium text-sm text-text-black-secondary">
          Your trip itineraries are placed here
        </p>
      </div>

      <ListLayout
        title="Flights"
        icon="/assets/airplaneinflight.svg"
        bgColor="bg-neutral-300"
        data={[...new Array(2)]}
        listItem={<FlightCard />}
      />

      <ListLayout
        title="Hotels"
        icon="/assets/warehouse.svg"
        bgColor="bg-neutral-900"
        data={[...new Array(2)]}
        listItem={<HotelCard />}
      />

      <ListLayout
        title="Activities"
        icon="/assets/roadhorizon-1.svg"
        bgColor="bg-primary-700"
        data={[...new Array(3)]}
        listItem={<ActivityCard />}
      />
    </div>
  );
}
