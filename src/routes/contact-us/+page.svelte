<svelte:head>
  <title>Contact Us</title>
</svelte:head>

<section class="body-font relative text-gray-600">
  <div class="inset-0 h-[65vh] bg-gray-300">
    <iframe
      width="100%"
      height="100%"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      title="map"
      scrolling="no"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.0073930809403!2d76.16279782865294!3d28.146035857701936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912b7bae1b85237%3A0xa81cd911d9259c1d!2sLovLuk%20India%20Enterprises!5e0!3m2!1sen!2sin!4v1733135434272!5m2!1sen!2sin"
    ></iframe>
  </div>
  <div class=" flex px-5 py-8">
    <div
      class="relative z-10 mx-auto mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-lg md:mt-0 md:w-2/3"
    >
      <h2 class="title-font mb-2 text-center text-lg font-medium text-gray-900 md:text-left">
        Contact Us
      </h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="relative mb-4">
          <label for="name" class="text-sm leading-7 text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div class="relative mb-4">
          <label for="phone" class="text-sm leading-7 text-gray-600">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            class="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div class="relative mb-4">
          <label for="qtitle" class="text-sm leading-7 text-gray-600">Query Title</label>
          <input
            type="text"
            id="qtitle"
            name="qtitle"
            class="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>
      <div class="relative mb-4">
        <label for="message" class="text-sm leading-7 text-gray-600">Message</label>
        <textarea
          id="message"
          name="message"
          class="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        ></textarea>
      </div>
      <button
        class="rounded-full border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
        >Send</button
      >
    </div>
  </div>
</section>
