import { PostType } from "../../../shared/types"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useNavigate } from "react-router";

ChartJS.register(ArcElement, Tooltip, Legend);

const TimeForm = (date:string): string => {
    
    const localeString = (new Date(date).toLocaleString()).split('. ')
    const localeTimeType = localeString[3].split(' ')[0]
    var localeTime = localeString[3].split(' ')[1].split(':')
    if(localeTimeType=='오후') localeTime[0] = (Number(localeTime[0])+12).toString()
    const month: string = localeString[1]
    const day: string = localeString[2]
    const hour: string = localeTime[0]
    const minute: string = localeTime[1]
    const text: string = `${month}/${day}  ${hour}:${minute}`
    return text
}

const Post: React.FC<{data:PostType}> = ({data}) => {
    const participation = data.participation.length
    const needVoter = data.requireVoter
    const others = data.totalVoter - participation - needVoter
    const dataset = {
        labels: ["참가자", "성사 조건","미참여"],

        datasets: [{
            data: [participation,needVoter,others],
            backgroundColor: [ "rgba(54, 162, 235, 0.6)","rgba(255, 99, 132, 0.6)", "rgba(255, 206, 86, 0.6)"],
            borderWidth: 1,
        },
    ]}
    const options = {
        plugins: {
          legend: {
            display: false // ✅ 상단 레이블(범례) 숨기기
          },
          tooltip: {
            enabled: true // ✅ 툴팁 유지
          }
        }
      }
    
    const navigate = useNavigate()
    const handleVote = () => {
        navigate(`/postContent/${data._id}`)
    }
    return(
        <div className="bg-white w-[290px] h-fit p-4 rounded-md">
            <div className="flex items-center mb-3">
                <div className="w-3 h-3 mr-2 text-center rounded-full bg-emerald-400" />
                <div className="text-[15px] font-semibold">{data.title}</div>
            </div>
            <hr/>
            <div className="mt-6 ">
                <div className="mx-auto w-[150px] h-[150px]"><Doughnut data={dataset} options={options}/></div>

                <table className="w-full mt-6 mb-6 text-center table-fixed">
                    <thead className="w-full border-b border-gray-400">
                        <tr className="w-full ">
                            <th className="w-1/2 py-1.5 font-normal bg-gray-200 rounded-tl-md">시작시간</th>
                            <th className="w-1/2 py-1.5 font-normal bg-gray-200 rounded-tr-md">마감시간</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr className="text-[14px]">
                            <td className="py-1.5 border-b border-l border-gray-300 rounded-bl-md">{TimeForm(data.startTime)}</td>
                            <td className="py-1.5 border-b border-r border-gray-300 rounded-br-md">{TimeForm(data.endTime)}</td>
                        </tr>
                    </tbody>
                </table>   
                <hr/>
                <button className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md" onClick={handleVote}>투표하기</button>         
            </div>


        </div>
    )
}
export {Post}