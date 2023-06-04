export function Footer () {
  const user = JSON.parse(window.localStorage.getItem('user'))

  return (
    <>
      {
        user
          ? (
            <footer className='w-full bg-primary fixed bottom-0 h-[30px] text-white'>
              <div className='relative z-10 flex justify-between items-center text-secondary text-lg'>
                <span className='icon-home' />
                <span className='icon-user' />
                <span className='icon-sign-out' />
              </div>
            </footer>
            )
          : (
            <footer className='w-full bg-primary fixed bottom-0 h-[30px]' />
            )
      }
    </>
  )
}
