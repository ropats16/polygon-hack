export const What = () => {
  return (
    <div className="bg-slate-900 py-32">
      <div className="pb-16 bg-gradient-to-r from-blue-500 to-sky-800 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-slate-900 lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <div>
                <h3 className="text-4xl font-medium text-slate-100">What</h3>
                <p className="mt-6 text-2xl font-medium text-slate-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  urna nulla vitae laoreet augue. Amet feugiat est integer dolor
                  auctor adipiscing nunc urna, sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
