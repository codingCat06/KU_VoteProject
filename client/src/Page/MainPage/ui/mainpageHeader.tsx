import HoiChar from '../../../shared/assets/ku_char_img.gif'

const MainPageHeader: React.FC<{cnt:Number|null}> = ({cnt}) => {
    var text = ""
    if(cnt==null){
        text="호이와 함께 투표해요!"
    }
    else if(cnt==0) text = "모든 투표를 참여했어요!"
    else text = `아직 ${cnt}개의 투표가 남았어요!`
    return(
        <div className='flex items-center w-full px-6 py-2 mb-4 bg-white rounded-md'>
            <img src={HoiChar} className='w-32 h-32 mr-6'/>
            <div className="font-['Ownglyph'] text-4xl">{text}</div>
        </div>
    )
}

export {MainPageHeader}