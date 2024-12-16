import Head from "./components/head";
import Hero from "./components/hero";
import Stats from "./components/stats";
import ServiceCards from "./components/services";
// import TeamCard from "./components/teamCard";
import Team from "./components/team";
import Map from "./components/map";
import ContactForm from "./components/contactForm";
import data from "./data/data.json";
import Accordion from "./components/accordion";

const Home = () => {
  const { head, hero, team, services, faq, contact } = data;

  return (
    <>
      <Head title={head.title} description={head.description} />
      <div className="container mx-auto">
        <div className="my-8 lg:my-16">
          <Hero title={hero.title} body={hero.body} />
        </div>

        <div className="flex justify-center mb-16">
          <Stats />
        </div>

        <div className="mx-4 md:mx-0">
          {/* Services */}
          <section className="mb-8 lg:mb-16" id="services">
            <h2 className="text-3xl font-bold mb-4 lg:mb-8 text-center">
              {services.title}
            </h2>
            <p className="mb-8 text-lg text-center">{services.body}</p>
            <ServiceCards services={services.list} />
          </section>

          {/* Team */}
          <section className="mb-8 lg:mb-16" id="team">
            <h2 className="text-3xl font-bold mb-4 lg:mb-8 text-center">
              {team.title}
            </h2>

            <p className="mb-8 text-lg text-center">{team.body}</p>
            {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-6"> */}
            {/* https://readymadeui.com/team-3.webp */}
            {/* <div className="col-span-8 lg:col-span-4">
                <TeamCard
                  name="Gaby Cruz"
                  role="Abogada Fundadora"
                  bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores accusamus possimus voluptatum aliquid vel tempore ex quam voluptatem, illum dolorem ea veritatis, at atque et placeat sunt iure pariatur similique! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores accusamus possimus voluptatum aliquid vel tempore ex quam voluptatem, illum dolorem ea veritatis."
                />
              </div> */}
            {/* <div className="col-span-8"> */}
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-md:justify-center">
              <Team members={team.members} />
            </div>
            {/* </div> */}
            {/* </div> */}
          </section>

          {/* Faq */}
          <section className="mb-8 lg:mb-16" id="faq">
            <div className="bg-base-200 px-4 lg:px-8 py-8 lg:py-16">
              <h1 className="mb-8 text-4xl font-bold text-center">
                {faq.title}
              </h1>
              <p className="mb-8 text-lg text-center">{faq.body}</p>
              <Accordion items={faq.questions} name="my-accordion-1" />
            </div>
          </section>

          {/* Contact us */}
          <section className="mb-8 lg:mb-16" id="contact">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-4 lg:mb-8 text-center">
                {contact.title}
              </h2>
              <p className="mb-8 text-lg text-center">{contact.body}</p>
            </div>
            <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <Map />
              </div>
              <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
