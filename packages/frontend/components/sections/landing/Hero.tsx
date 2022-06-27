import { useRouter } from "next/router";
import { MotionFadeIn } from "@/components/motion";
import { Button } from "@/components/elements";

export const Hero = () => {
  const router = useRouter();

  const handleEnter = () => {
    console.log("enter");
  };

  return (
    <div className="relative pt-16 pb-32 overflow-hidden bg-gradient-to-t from-purple-900/50">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
      <MotionFadeIn>
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div></div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-100">
                    Stay on top of customer support
                  </h2>
                  <p className="mt-4 text-lg text-slate-300">
                    Semper curabitur ullamcorper posuere nunc sed. Ornare
                    iaculis bibendum malesuada faucibus lacinia porttitor.
                    Pulvinar laoreet sagittis viverra duis. In venenatis sem
                    arcu pretium pharetra at. Lectus viverra dui tellus ornare
                    pharetra.
                  </p>
                  <div className="mt-6">
                    <Button onClick={() => router.push("/mint")}>
                      Enter App
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </MotionFadeIn>
    </div>
  );
};
