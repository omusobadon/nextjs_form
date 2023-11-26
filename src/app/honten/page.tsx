import Link from 'next/link'
export default function honten() {

    return (

        <div>
            <Link href={`/`}><button>トップページへ</button></Link>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.1297324014495!2d139.69400212695308!3d35.698425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2910af8d39%3A0xc4459467f05e0bf2!2z5pel5pys6Zu75a2Q5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1699838746116!5m2!1sja!2sjp"
                width="600"
                height="450" >
            </iframe>

        </div>




    )
}