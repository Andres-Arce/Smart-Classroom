document.addEventListener('DOMContentLoaded', () => {
//CLOCK
 async function Clock(){
  dayjs.locale('es');
  const DATE = dayjs().format('dddd, D [de] MMMM [de] YYYY');
  document.getElementById('date').textContent = DATE.charAt(0).toUpperCase() + DATE.slice(1);
 }

  //Event button 'export'
  const $export_button = document.getElementById('export-button');
  const $_notifications = document.getElementById('notifications');

  $export_button.addEventListener('click', () => {
    $_notifications.classList.add('active');
    setTimeout(() => {
      $_notifications.classList.remove('active');
    }, 3000);
  });

  /*
    Andy: I create the function called thread, The code async ensure read all code
    and then waiting other functions for execute the same time.
  */

  async function thread(){
    Clock();
  };

  thread();
});
