const Shimmer = () => {
    return (
        <div className='w-1/5 mt-6'>
            <div className='ml-4 cursor-pointer text-white' >
                <div className='w-full h-40 rounded-xl bg-[#212121]'></div>
                <div className='flex mt-4'>
                    <div className='w-12 h-10 rounded-full bg-[#212121]'></div>
                    <div className=' text-white font-bold ml-2 w-full'>
                        <div className='bg-[#212121] w-5/6 h-4'></div>
                        <div className='bg-[#212121] w-4/6 h-4 mt-2'></div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Shimmer;
