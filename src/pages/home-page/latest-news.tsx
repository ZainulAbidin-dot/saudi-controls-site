import ev from '@/assets/images/news/ev.png';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

const operationsMaintenance = [
  {
    image: ev,
    title: 'EV Portable Chargers',
    description:
      '“🚀 Saudi Controls Ltd. partners with CEER to supply EV charging solutions across Saudi Arabia.”',
  },
];

export function LatestNewsSection() {
  const ref = useFadeInAnimation({
    animationClass: 'animate-fadeInDown',
    threshold: 0.25,
  });

  return (
    <section className="pt-30 pb-10" ref={ref} data-animatable>
      <Wrapper>
        <div className="flex flex-col items-center justify-center gap-12 md:text-center lg:text-center">
          {/* Responsive layout: column on sm/md, row on lg */}
          <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-left text-3xl font-bold sm:text-4xl md:text-5xl lg:text-4xl">
                Latest News
              </h2>
              <p className="text-muted-foreground mt-4 text-justify text-lg leading-relaxed">
                Saudi Controls Ltd. has secured a significant agreement with
                Saudi Arabia’s home-grown EV OEM, Ceer, to deliver high-quality
                portable charging equipment—powering the Kingdom’s electric
                mobility future
              </p>
              <p className="text-muted-foreground mt-4 text-justify text-lg leading-relaxed">
                This strategic partnership with Ceer marks a pivotal step in
                Saudi Controls’ journey to electrify Saudi Arabia’s
                transportation ecosystem. As part of Ceer’s SAR 5.5 billion
                localization drive, our portable charging solutions will play a
                vital role in enabling EV adoption across the kingdom—aligning
                perfectly with the Vision 2030 initiative.
              </p>
              <p className="text-muted-foreground mt-4 text-justify text-lg leading-relaxed">
                Saudi Controls is in active discussions to expand its portfolio
                of EV charging solutions such as wall-mounted stations, DC
                chargers and Robotics furthering the Kingdom’s commitment to
                sustainable electric mobility.
              </p>
            </div>

            {/* Card Section */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-1">
                {operationsMaintenance.map((item, index) => (
                  <div key={index} className="group perspective">
                    <div className="transform-style-3d relative h-[300px] w-[200px] transition-transform duration-1500 group-hover:rotate-y-180 md:w-[400px]">
                      {/* Front Side */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-white p-6 text-gray-900 shadow-lg backface-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-fit h-[100%] w-[100%] drop-shadow-md"
                          style={{
                            filter: 'brightness(0.9) contrast(1.2)',
                            mixBlendMode: 'multiply',
                          }}
                        />
                        <h3 className="card__z my-2 text-center text-2xl font-bold">
                          {item.title}
                        </h3>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 flex rotate-y-180 items-center justify-center rounded-lg bg-gray-900 p-6 text-white backface-hidden">
                        <p className="text-md card__z text-left">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
