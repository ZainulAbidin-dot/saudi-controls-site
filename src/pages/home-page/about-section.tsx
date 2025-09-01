import Tilt from 'react-parallax-tilt';

import aboutImage from '@/assets/images/Engr_Abdulrahman_A_Z_Alshathry.png';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

export function AboutSection() {
  const sectionRef = useFadeInAnimation({
    animationClass: 'animate-fadeInLeft',
    threshold: 0.25,
  });

  return (
    <section ref={sectionRef} className="py-20" data-animatable>
      <div className="mb-8 w-full rounded bg-gradient-to-r from-blue-600 to-green-500 px-4 py-3 text-center text-lg font-semibold text-white shadow-md">
        🚀 Proudly Signed: Contract with CEER to Supply Cutting-Edge EV Charging
        Solutions
      </div>
      <Wrapper>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="background-stripes parallax-effect-glare-scale space-y-6 rounded-lg px-2 py-6 shadow-xl lg:w-1/2">
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={1000}
              scale={1.02}
              glareEnable
              glareMaxOpacity={0.45}
              glareBorderRadius="50%"
            >
              <img
                src={aboutImage}
                alt="Engr. Abdulrahman A. Z. Alshathry"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </Tilt>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Engr. Abdulrahman A. Z. Alshathry
              </h3>
              <p className="text-lg text-gray-600">Chief Executive Officer</p>
              <blockquote className="mt-4 text-gray-700 italic">
                "Our commitment to excellence and innovation drives us to
                deliver the best solutions for our clients."
              </blockquote>
            </div>
          </div>
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-5xl">
              Where Vision Meets Precision
            </h2>
            <p className="text-lg text-gray-600">
              For over three decades, Saudi Controls has redefined the
              engineering frontier of Saudi Arabia. From our deep roots in
              Riyadh to the farthest horizons of the Kingdom, we forge bespoke,
              cutting-edge solutions where trust, mastery, and innovation
              converge. The future is not a destination—it’s our legacy in
              motion. We transform challenges into milestones, crafting smarter
              cities, safer communities, and sustainable progress.
            </p>
            <p className="text-lg text-gray-600">
              Join us as we ignite tomorrow, empowering visionary ideas with
              unwavering trust and relentless expertise.
            </p>
            <p className="text-lg text-gray-600">
              Empowering Vision. Engineered by Trust.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
