import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';

var AboutCss = require('./about.css');

export default class About extends React.Component{
    render(){
        return(
            <div className={AboutCss.about01}>
            <div className={AboutCss.header}><Header/></div>
            <div className={AboutCss.about02}>
            <h1 className={AboutCss.about03}>
                关于环游世界网
            </h1>
            <div className={AboutCss.about04}>
                环游世界网，中国年轻一代用得更多的旅游网站。<br></br>
                得益于“内容 + 交易” 的核心优势，环游世界网更理解年轻人的偏好<br></br>
                让复杂的旅游决策、预订和体验，变得简单、高效和便捷。 <br></br>
                环游世界网是旅游社交网站，是数据驱动平台，是新型旅游电商。<br></br>
                提供全球 60,000个旅游目的地的<br></br>
                交通、酒店、景点、餐饮、购物、用车、当地玩乐等信息和产品预订服务。 <br></br>
                基于 10年的内容积累，环游世界网通过AI技术与大数据算法，<br></br>
                将个性化旅游信息与来自全球各地的旅游产品供应商实现连接，<br></br>
                为用户提供与众不同的旅游体验。<br></br>
                环游世界网独有的“内容获客”模式，高效匹配供需，<br></br>
                助力平台商家提升利润率，并重塑旅游产业链。 <br></br>
                自 2019 年公司化运营以来，经大量旅行者自主分享，<br></br>
                环游世界网社区的信息内容不断丰富和完善，<br></br>
                成为年轻一代首选的“旅游神器”。 <br></br>
                与父辈们常用的传统在线旅游网站(OTA)相比，<br></br>
                环游世界网更潮、更酷，深谙“年轻一代的选择”，<br></br>
                帮助他们从不同角度，重新发现世界。 
            </div>
            <h1 className={AboutCss.about03}>
                联系我们
            </h1>
            <div className={AboutCss.about04}>
                <b>服务热线：</b><br></br>
                环游世界网客服：国内 40088208820 海外 +86-40088208820<br></br>
                <b>服务邮箱：</b><br></br>
                环游世界网广告部：AD@worldwide.com<br></br>
                环游世界网品牌市场部：pr@worldwide.com<br></br>
                <b>其他：</b><br></br>
                环游世界网全球总部：成都市金堂县环游世界大道1号
            </div>
            <h1 className={AboutCss.about03}>
                隐私服务
            </h1>
            <div className={AboutCss.about04}>
                隐私权是每个人的重要权利，环游世界网非常重视用户个人信息和隐私的保护。在使用环游世界网的网站、产品和服务前，请您务必仔细阅读并透彻理解本《隐私政策》。一旦您选择使用或继续使用，即表示您认可并接受本《隐私政策》现有内容及其可能随时更新的内容，同意我们按照本《隐私政策》收集、使用、披露、储存和分享，或以其他方式运用您的相关信息。<br></br>
                <b>信息收集</b><br></br>
                环游世界网可能会通过如下方式收集与您有关的信息。如果您不提供相关信息，可能无法注册成为我们的用户或无法享受我们的某些服务，或者无法达到相关服务拟达到的效果。<br></br>
                1、您提供的信息 <br></br>
                为了顺利的为您提供相关服务，环游世界网或环游世界网商家将会收集您在环游世界网输入的或者以其他方式提供给我们的所有信息，具体信息内容以实际要求为准，例如 <br></br>
                1）您在注册账户时需向我们提供关个人信息，如您的姓名、邮件地址、电话号码等，请您在注册时及时、详尽及准确的提供个人资料，并不断更新注册资料。 <br></br>
                2）您在预订机票、车票时，您应提供乘机人/乘车人姓名、证件号码以及联系人姓名、手机号码和电子邮箱等信息； <br></br>
                3）您在预订酒店时，您应提供入住人及联系人姓名、联系方式、证件号码等信息； <br></br>
                4）您在预订旅游度假产品时，您应提供出行人及联系人的姓名、联系方式、证件资料等信息；<br></br> 
                5）您在预订环游世界网或环游世界网合作商其他产品时，根据产品性质及为了实现服务，均有可能需要您提供相关信息。<br></br> 
                6）为完成交易，您可能需要提供账号相关信息，并选择付款方式，以便我们了解您的支付状态。 <br></br>
                7）您通过我们的服务向其他方提供的共享信息，以及您使用我们的服务时所储存的信息。如您为其他人预订商品或服务，您需要按照提示提供该实际出行人的信息。您确保您已经取得该出行人本人的同意，并确保其已知晓并接受本隐私政策。 <br></br>
                2、我们获取的您的信息 <br></br>
                1）您使用服务时我们可能收集如下信息：日志信息，指您使用我们的服务时，系统可能通过cookies或其他方式自动采集的技术信息，包括但不限于：IP地址信息、硬件设备或软件信息、SDK或API版本、平台、时间戳、应用标识符、应用程序版本、应用分发渠道、iOS供应商标识符（IDFV)、iOS广告标识符（IDFA)、安卓广告主标识符、网卡（MAC)地址、国际移动设备识别码（IMEI）、设备型号、终端制造厂商、终端设备操作系统版本、会话启动/停止时间、语言所在地、移动网络/国家代码、时区和网络状态（WiFi等)、硬盘、CPU和电池使用情况、位置信息（指您开启设备定位功能并使用我们基于位置提供的相关服务时，收集的有关您位置的信息）等。 <br></br>
                2）为了能够向您提供个性化的信息搜索及交易服务，我们会根据您的浏览及搜索记录、设备信息、位置信息、订单信息等，提取您的浏览、搜索偏好、行为习惯、位置信息等特征。 <br></br>
                3、其合法途径收集您的信息<br></br>
                我们还可能从其他合法来源收到关于您的信息并且将其加入我们的信息库，例如其他方使用我们的服务时所提供有关您的共享信息等等。<br></br>
                <b>信息使用</b><br></br>
                环游世界网利用收集的信息来提供、维护、保护和改进服务，同时开发新的服务为用户创造更好的体验，并提高我们的总体服务品质。<br></br>
                您理解并同意，环游世界网可在如下情形使用您的信息：<br></br>
                1）向您提供服务，特别是为您提供定制服务；<br></br>
                2）在我们提供服务时，用于身份验证、客户服务、安全防范、诈骗监测、存档和备份用途，确保我们向您提供的产品和服务的安全性；<br></br>
                3）帮助我们设计新服务，改善我们现有服务；<br></br>
                4）向您提供与您更加相关的广告以替代普遍投放的广告；<br></br>
                5）评估我们服务中的广告和其他促销及推广活动的效果，并加以改善；<br></br>
                6）环游世界网可能会对产品使用情况进行统计；并可能会与公众分享这些统计信息，以展示我们服务的整体使用趋势；<br></br>
                7）其他有利于本公司更好的为您提供服务的情形。<br></br>
                8）我们可能需要使用您的信息来处理和解决法律纠纷。<br></br>
                9）其他有利于本公司更好的为您提供服务的情形。<br></br>
                您授权并同意接受我们向您的电子邮件、手机、通信地址等发送商业信息，包括不限于最新的产品信息、促销信息等。 <br></br>
                我们可能在必要时，例如因系统维护而暂停部分服务时，向您发出与服务有关的公告。您理解并认可您可能无法取消这些公告，因为这些公告与服务有关、性质不属于商业推广。<br></br>
                <b>信息披露</b><br></br>
                环游世界网将以高度的勤勉义务对待用户信息，除非事先获得您的授权或本《隐私政策》约定外，不会将这些信息对外公开或向环游世界网管理公司之外的第三方提供。<br></br>
                您理解并同意，环游世界网可在如下情形依法披露您的个人信息：<br></br>
                1）事先获得用户的明确授权；<br></br>
                2）您使用了必须披露个人信息才能正常使用的环游世界网或其合作商提供产品或服务，比如向您邀请的对象显示电子邮件地址，以便于对方知晓邀请的来源；<br></br>
                3）根据法律、法规要求或政府主管部门的强制性要求，或者为了维护公共利益；<br></br>
                4）在紧急的情况下，为了保护环游世界网及其用户之安全；<br></br>
                5）为维护环游世界网的合法权益，或环游世界网服务的正常运营，例如查找、预防、处理欺诈或安全方面的问题；<br></br>
                6）我们可能会向第三方（包括但不限于关联公司、合作伙伴等）共享您的订单信息、账户信息、设备信息以及位置信息等，以保障为您提供的服务顺利完成。但我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息；<br></br>
                7）其他符合法律，以及符合环游世界网《服务协议》或其他相关协议、规定、指引的情形。<br></br>
                环游世界网也可能使用您的信息，通过各种方式向您发送营销信息，提供或推广我们或合作方提供的产品和服务。如您不希望我们将您的个人信息用作广告用途，您可以通过我们可能在广告中提供的相关提示，或可能在特定服务中提供的指引，或本《隐私政策》预留的电子邮件，要求我们停止为上述用途使用您的个人信息。<br></br>
                我们可能会对您及（或）您的公司的身份和交易数据进行综合统计，并以环游世界网判断合理的目的和用途将该综合统计向广告主披露。但是，在这些情况下，我们不会向这些机构披露任何可能用以识别用户的个人身份的资料，但从用户的用户名或其它可披露资料分析得出的资料不受此限。<br></br>
                <b>敏感信息</b><br></br>
                某些个人信息因其特殊性可能被认为是敏感信息，例如您的种族、宗教、个人健康和医疗信息等。相比其他个人信息，敏感个人信息受到更加严格的保护。<br></br>
                请注意，您在使用我们的服务时所提供、上传或发布的内容和信息，例如有关您在游记中发布的照片等信息，可能会泄露您的敏感个人信息。您需要谨慎地考虑，是否在使用我们的服务时披露相关敏感个人信息。<br></br>
                <b>信息存储</b><br></br>
                所收集的用户信息和资料可能将保存在环游世界网及其关联公司的服务器上，或环游世界网委托机构的服务器上。<br></br>
                <b>外部链接</b><br></br>
                环游世界网的网站、产品、或服务中可能含有到其他网站的链接。环游世界网对那些网站的隐私保护措施不负任何责任。我们可能在任何需要的时候增加商业伙伴或共用品牌的网站。<br></br>
                <b>公开发布信息</b><br></br>
                您发布游记、照片、笔记等旅游信息的或评论将被显示在公共区域，对任何用户来说是公开的。请注意所有在这些场所公开的信息可能会被公众阅读，请您在决定公布您的个人信息前仔细考虑。 <br></br>
                <b>信息安全</b><br></br>
                环游世界网尽力保护您的信息安全，以防信息的丢失、不当使用、未经授权的披露等，我们将为此采取合理的预防措施，使用符合行业标准的加密技术来保护您在使用本服务中涉及的数据。但是，您理解并确认，任何人无法保证互联网数据100%的安全，如果出现数据安全，将会由您个人承担。<br></br>
                如果环游世界网得知有安全系统漏洞，我们可能在必要时通过您预留的电子邮件地址与你联系或在我们的网络系统上发布通知，并可能提供可能的保护措施。<br></br>
                <b>未成年人信息保护</b><br></br>
                环游世界网非常重视对未成年人信息的保护。若您是18周岁以下的未成年人，在使用环游世界网的产品和/或服务前，应事先取得您的家长或法定监护人的同意，并请要求您的父母或监护人阅读本《隐私政策》。<br></br>
                <b>变更</b><br></br>
                环游世界网将根据法律、法规或政策，或环游世界网网站、产品或服务的变化和技术的更新，或其他环游世界网认为合理的原因，对本《隐私政策》进修改变更。变更以网站公告、或用户通知等合适的形式告知用户，或在网页中显著的位置予以发布。若您不接受变更后条款的，应立即停止使用，若您在本《隐私政策》变更后继续使用的，视为接受修订后的所有条款。<br></br>
                <b>适用范围</b><br></br>
                除另有明确约定外，我们所有的服务均适用本《隐私政策》。针对某些特定服务的特定隐私政策，将更具体地说明我们在该等服务中如何使用您的信息。该特定服务的隐私政策构成本《隐私政策》的一部分。<br></br>
            </div>

            </div>
            <Footer/>
            </div>
        )
    }
}