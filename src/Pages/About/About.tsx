//Imports
	// Extensions
import { Box, Grid, Paper, Stack, Typography, useTheme } from "@mui/material";
import { useSpring, animated, useScroll } from '@react-spring/web';
import Divider from '@mui/material/Divider';
import { ReactElement, useEffect, useState } from "react";
	// Custom Extensions
import AnimatedButton from "../../Common/AnimatedButton";
import { PageBox, DisplayPanel, PageStack, OutlinedPaper, DownArrow } from '../../Common/CommonElements';
	// Assets
// import phoneIcon from'../../Resources/telephone.png';
// import linkedInIcon from'../../Resources/social.png';
// import mailIcon from'../../Resources/mail.png';
// import linkedInIcon from'../../Resources/linkedin.png';
// import githubIcon from '../../Resources/github.png';
// import phoneIconDark from '../../Resources/dark-telephone.png';
// import linkedInIconDark from '../../Resources/dark-social.png';
// import mailIconDark from '../../Resources/dark-mail.png';
import {ReactComponent as PhoneSVG } from '../../Resources/call.svg';
import {ReactComponent as EmailSVG } from '../../Resources/message.svg';
import {ReactComponent as LinkedInSVG } from '../../Resources/linkedin.svg';
import {ReactComponent as GitHubSVG } from '../../Resources/github.svg';
// import linkedInIconDark from'../../Resources/dark-linkedin.png';
// import githubIconDark from '../../Resources/dark-github.png';
	// Data
import stringData from '../../Resources/raw-strings.json';
import { Padding } from "@mui/icons-material";

function TitleCard ( props: any ) {
	
	const theme = useTheme();
	const AnimatedTypography = animated(Typography);
	const AnimatedBox = animated(Box);

	const { scrollYProgress } = useScroll();
	const scrollSpring: any = useSpring({
		from: {
			opacity: 0.0
		}
		,
		to: [{
			opacity: 0.5
		},{
			opacity: 0.0
		}],
		loop: true,
		delay: 5000,
		config: {
			duration: 2000
		}
	});

	function incrementSubtitle () {
		setDisplayText({
			'Software Development': 'Consulting',
			'Consulting'          : 'Theoretical Physics',
			'Theoretical Physics' : 'Optimization',
			'Optimization'        : 'Software Development'
		}[displayText] ?? 'Software Development');
	};

	const [displayText, setDisplayText] = useState("Software Development");
	const spring = useSpring({
		from:{ 
			opacity: 0,
			x: -200 },
		to: [{
			opacity: 1,
			x: 0
		},{
			opacity: 0,
			x: 200
		},],
		reset: true,
		onRest: () => {
			incrementSubtitle();
		},
		config: {
			mass: 5,
			friction: 200,
			tension: 500
		}
	});

	return <>
		<Box className={props.className} sx={{textAlign:'center', ...props.sx}}>
			<DisplayPanel style={{ ...props.style }}>

				<Typography variant='h1'>
					Antonis Aristeidou
				</Typography>

				<br />

				<Typography>
					<AnimatedTypography variant='h4' sx={{color:theme.palette.text.secondary}} style={spring}>
						{displayText}
					</AnimatedTypography>
				</Typography>

				<br />

				{/* <OutlinedPaper> */}
					<Typography variant='body1' sx={{justifyContent:'center', textAlign:'center', width: '70vw'}}>
						{stringData.about.abstract}
					</Typography>
				{/* </OutlinedPaper> */}

				<br />

			</DisplayPanel>
		</Box>
	</>
};

function DevPanel ( props: any ) {
	return <Grid container spacing={4.3} sx={{width: '100%'}}>
	<Grid item xs={12}>
	<OutlinedPaper sx={{width: '100%', height: '100%',mb:-4, textAlign:'justify', p:2}}>
		<Typography variant='h5'>
			{stringData.about.devPanel.experienceScope}
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify',mb:-4, p:2}}>
		<Typography variant='h5'>
			{stringData.about.devPanel.languageExperience}
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify',mb:-4, p:2}}>
		<Typography variant='h5'>
			{stringData.about.devPanel.auxiliaryExperience}
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify', mb:-4,p:2}}>
		<Typography variant='h5'>
			{stringData.about.devPanel.testingExperience}
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify',mb:-4, p:2}}>
		<Typography variant='h5'>
			{stringData.about.devPanel.personalExperience}
			</Typography>
	</OutlinedPaper>
	</Grid>
	</Grid>
};

function TeachPanel ( props: any ) {
	const theme = useTheme();
	return <Grid container spacing={4.3} sx={{width: '100%'}}>
		<Grid item xs={12}>
		<OutlinedPaper sx={{display:'flex', alignItems: 'center', width: '100%', height: '100%', p:2}}>
			<Grid container>
				<Grid item xs={3} sx={{display:'flex', alignItems: 'center'}}>
				<Typography variant="h4" color={theme.palette.text.disabled}>
					Unique talks authored:
				</Typography>
				</Grid>

				<Grid item xs={3}>
				<Typography variant="body1" color={theme.palette.text.disabled}>
					SHOWCASE
				</Typography>
				<Typography variant="body1" >
					{stringData.about.teachPanel.talks.showcase}
				</Typography>
				</Grid>
	
				<Grid item xs={3}>
				<Typography variant="body1" color={theme.palette.text.disabled}>
					CASE STUDY
				</Typography>
				<Typography variant="body1">
					{stringData.about.teachPanel.talks.caseStudy}
				</Typography>
				</Grid>

				<Grid item xs={3}>
				<Typography variant="body1" color={theme.palette.text.disabled}>
					TUTORIAL
				</Typography>
				<Typography variant="body1">
					{stringData.about.teachPanel.talks.tutorial}
				</Typography>

				</Grid>
			</Grid>
		</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify',mb:-4, p:2}}>
		<Typography variant='h5'>
			{stringData.about.teachPanel.teachingScope}
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={6}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify', mb:-4, p:2}}>
		<Typography variant='h5'>
			{stringData.about.teachPanel.teachingExperience}
		</Typography>
	</OutlinedPaper>
	</Grid>

	</Grid>
};

function ModelPanel ( props: any ) {
	return <Grid container spacing={4.3} sx={{width: '100%'}}>
	<Grid item xs={12}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify', mb:-4 , p:2}}>
		<Typography variant='h5'>
			{stringData.about.modelPanel.modelScope}
		</Typography>
	</OutlinedPaper>
	</Grid>
	<Grid item xs={12}>
	<OutlinedPaper sx={{width: '100%', height: '100%',textAlign: 'justify', mb:-4, p:2}}>
		<Typography variant='h5'>
			{stringData.about.modelPanel.modelExperience}
		</Typography>
	</OutlinedPaper>
	</Grid>
	</Grid>
};

function WorkPanel ( props : any ) {
	return <DisplayPanel style={{...props.compAnimationForCompCard}}>
		<Typography variant="h2">
			Professional Experience
		</Typography>
		<br/>
		<Divider>
			<Typography variant="subtitle1" color={props.theme.palette.text.disabled}>
				{stringData.about.workPanel.wolfram.location} | {stringData.about.workPanel.wolfram.date}
			</Typography>
		</Divider>
		<Grid container spacing={0.1} sx={{width:'100%'}}>
			<Grid item xs={5}>
				<OutlinedPaper>
				<Typography variant="subtitle2" color={props.theme.palette.text.disabled}>
					Position
				</Typography>
				<Typography variant="h4">
					{stringData.about.workPanel.wolfram.position}
				</Typography>
				</OutlinedPaper>
			</Grid>
			<Grid item xs={7}>
				<OutlinedPaper>
				<Typography variant="subtitle2" color={props.theme.palette.text.disabled}>
					Employer
				</Typography>
				<Typography variant="h4" sx={{alignContent:'left'}}>
					{stringData.about.workPanel.wolfram.name}
				</Typography>
				</OutlinedPaper>
			</Grid>
			<Grid item xs={12}>
			<OutlinedPaper>
				<Typography
					variant="subtitle2"
					color={props.theme.palette.text.disabled}
				>
					Responsibilities & Projects
				</Typography>
				<Box
					height = {10} 
				/>
				<Stack spacing={1}>
					{
						Object.entries(stringData.about.workPanel.wolfram.experience).map(
							([key, value]) => <>
								<AnimatedButton
								
									sx={{
										height:'50pt',
									}}
									textAlign = 'left'
									onClick={ props.createHandleWorkBtnClick(key) }
									isSelected={ props.createExpSelectedQ(key) }
									label={value.label}
								>
									{ value.title }
								</AnimatedButton>
								{
									props.expSelected === key ? <Grid item xs={12}><OutlinedPaper>
									<Typography variant="subtitle2" color={props.theme.palette.text.disabled}>
										Description
									</Typography>
										<Typography variant="body1">
											{value.desc}
										</Typography>
									</OutlinedPaper></Grid> : null
								}
								<Divider/>
							</>
						)
					}
				</Stack>
				</OutlinedPaper>
			</Grid>
			
		</Grid>
		<br />
	</DisplayPanel>
};

function EduPanel ( props : any ) {
	return <DisplayPanel style={{...props.compAnimationForCompCard}}>
		<Typography variant="h2">
			Academic Background
		</Typography><br />
		<Divider>
			<Typography variant="subtitle1" color={props.theme.palette.text.disabled}>
				{stringData.about.academicPanel.bsc.location} | {stringData.about.academicPanel.bsc.date}
			</Typography>
		</Divider>
		<Grid container spacing={0.1} sx={{width:'100%'}}>
			<Grid item xs={12} >
				<OutlinedPaper>
				<Typography variant="subtitle2" color={props.theme.palette.text.disabled}>
					Degree name
				</Typography>
				<Typography variant="h4" sx={{alignContent:'left'}}>
					{stringData.about.academicPanel.bsc.degreeName}
				</Typography>
				</OutlinedPaper>
			</Grid>
			<Grid item xs={3} >
				<OutlinedPaper>
				<Typography variant="subtitle2" color={props.theme.palette.text.disabled}>
					Award
				</Typography>
				<Typography variant="body1">
					{stringData.about.academicPanel.bsc.award}
				</Typography>
				</OutlinedPaper>
			</Grid>
			<Grid item xs={9}>
				<AnimatedButton textAlign='left' sx={{width:'99.8%', height:'97.5%'}}
					onClick={() => props.handleThesisBtnClick()}
					isSelected={props.isThesisSelected}
				>
					<Typography variant="subtitle2" color={props.theme.palette.text.disabled}>
						Thesis
					</Typography>
					<Typography variant="body1">
						{stringData.about.academicPanel.bsc.thesisName}
					</Typography>
				</AnimatedButton>
			</Grid>
			<Grid item xs={12}>
				{
					props.isThesisSelected ? <OutlinedPaper>
						<Typography variant="subtitle2" color={props.theme.palette.text.disabled}>
							Description
						</Typography>
						<Typography variant="body1">
							{stringData.about.academicPanel.bsc.thesisDescription}
						</Typography>
					</OutlinedPaper> : null
				}
			</Grid>
			
		</Grid>
		<br />
	</DisplayPanel>
};

function CompPanel ( props : any ) {
	function handleCompBtnClick ( val : string ) {
		if ( props.compSelected === val ) {
			props.setCompSelected(null)
			props.setIsCompSelected(false)
		} else {
			props.setCompSelected(val)
			props.setIsCompSelected(true)
		}
	};
	return <DisplayPanel style={{...props.compAnimationForCompCard}}>

		<Typography variant='h2'>
			Core Competencies
		</Typography>
		
		<br/>
		
		<Grid width='100%' container direction='row' justifyContent='space-evenly'>
			{tmpButtonObj.map(
				obj => {return (
					<AnimatedButton
						sx={{height:'10vh',width:'20vw'}}
						isSelected={ props.compSelectedQ( obj.key ) }
						onClick={ () => handleCompBtnClick( obj.key ) }
					>
						{obj.text}
					</AnimatedButton>
				);
			}
			)}
		</Grid>

		<br/>
		{
			!props.isCompSelected
			? null
			: <>{{
					'dev': <DevPanel />,
					'teach': <TeachPanel />,
					'model': <ModelPanel/>,
					'none': null
				}[props.compSelected as string ?? 'none']}
				<br/><br/>
			</>
		}
		
		</DisplayPanel>
};

function ContactCard ( props: any ) {
	const theme = useTheme();
	const svgColor = theme.palette.mode === 'dark' ? "#777" : "111";
	let svgWidth = 35;

	interface IContactObj {
		text: string,
		href: string,
		icon: React.ReactNode
	};
	interface IContactColumn {
		title: string,
		data: IContactObj[],
	};
	interface IContactsGrid {
		details : IContactColumn,
		links : IContactColumn,
	};
	
	const contactsObjectArray: IContactsGrid = {
		details : {
			title: "Contact Details",
			data: [{text: 'tonyaris@outlook',
				href: 'mailto:tonyaris@outlook.com',
				icon: <EmailSVG fill={svgColor} width={svgWidth}/>
			},
			{text: '+(44) 747 868 2747',
				href: 'tel:+447478682747',
				icon: <PhoneSVG  fill={svgColor} width={svgWidth}/>
			}],
		},
		links : {
			title:"Links",
			data:[{
				text: 'Antonis Aristeidou',
				href: 'https://www.linkedin.com/in/antonis-aristeidou',
				icon: <LinkedInSVG fill={svgColor} width={svgWidth}/>
			},
			{text: 'ToneAr',
				href: 'https://www.github.com/ToneAr',
				icon: <GitHubSVG fill={svgColor} width={svgWidth}/>
			}],
		}
	};
	
	return <DisplayPanel style={{...props.style, width:'100%'}}>
		<Typography variant='h2'>
			Details
		</Typography>
		
		<br/>
		<Grid container spacing={10} direction='row' sx={{textAlign: 'center'}}>
				{
					Object.values(contactsObjectArray).map( (values) => {
							return <Grid item xs={6}>
								<OutlinedPaper className='paper-row'>
									<Stack spacing={2} >

										<Typography variant='h5' sx={{color: theme.palette.text.secondary, textAlign: 'center'}}>
											{`${values.title}`}
										</Typography>

										<br/>
										<Grid container spacing={2} sx={{justifyContent:'center', textAlign: 'left'}}>
											{
												values.data.map( (obj: IContactObj) => {
														return<>
															<Grid item xs={3} sx={{ textAlign: 'right',p:0}} >
																{obj.icon}
																{/* <Typography variant='body1'>
																	<img src={theme.palette.mode==='dark' ? obj.icon.dark : obj.icon.default} width={30}/>
																</Typography> */}
															</Grid>
															<Grid item xs={9} sx={{textAlign: 'left',p:0}}>
																<Typography variant='body1'>
																	<a className={theme.palette.mode === "dark" ? 'darkLink' : 'link'} href={obj.href} >
																		{`${obj.text}`}
																	</a>
																</Typography>
															</Grid>
														</>
													}
												)
											}
										</Grid>

									</Stack>
								</OutlinedPaper>
							</Grid>
						}
					)
				}
		</Grid>
		<br/>
	</DisplayPanel>
};

export default function About() {
	useEffect(() => {
			document.title = "TONE : About me";
			window.scrollBy(0, 70);
		},
		[]
	);

	// Constants
	const theme = useTheme();
	const [ expSelected, setExpSelected ] = useState<string | null>(null);
	const [ isCompSelected, setIsCompSelected ] = useState<true | false>(false);
	const [ compSelected, setCompSelected] = useState<string | null>(null);
	const [ isThesisSelected, setIsThesisSelected ] = useState<boolean>(false);

	// Springs
	const compAnimationForTitleCard = useSpring({
		scaleY:  isCompSelected ? `0%` : `100%`,
		display: isCompSelected ? `none` : `flex`,
		opacity: isCompSelected ? 0 : 1,
	});
	const compAnimationForCompCard = useSpring({
		// y: isCompSelected ? `-30vh` : `0vh`
	});

	
	// Functions
	function handleThesisBtnClick ( ) : void {
		setIsThesisSelected(!isThesisSelected)
	};
	function createHandleWorkBtnClick ( key : string ) : Function {
		return () : void =>{
			setExpSelected(
				(expSelected === null || key !== expSelected)
				? key
				: null
			)
		}
	};
	function createExpSelectedQ ( key : string ) : boolean {
		return expSelected === key
	};
	function compSelectedQ (val :string ) : boolean {
		return compSelected === val
	};

	// Main
	return (
		<PageBox>
			<PageStack>

				{/* Spacer */}
				<Box sx={{height: '10vh'}} />
				
				{/* Title */}
				<TitleCard style={{...compAnimationForTitleCard}} />

				{/* Core Competencies */}
				<CompPanel 
					compSelected={compSelected}
					compSelectedQ = {compSelectedQ}
					isCompSelected = {isCompSelected}
					setCompSelected = {setCompSelected}
					setIsCompSelected = {setIsCompSelected}
				/>
					
				{/* Down Arrow */}
				<DownArrow/>

				{/* Education */}
				<EduPanel
					theme = {theme}
					isThesisSelected = {isThesisSelected}
					handleThesisBtnClick = {handleThesisBtnClick}
				/>

				{/* Down Arrow */}
				<DownArrow/>

				{/* Work */}
				<WorkPanel
					theme = {theme}
					compAnimationForCompCard = {compAnimationForCompCard}
					createHandleWorkBtnClick = {createHandleWorkBtnClick}
					createExpSelectedQ = {createExpSelectedQ}
					expSelected = {expSelected}
				/>
					
				{/* Down Arrow */}
				<DownArrow/>

				{/* Contact Info Card */}
				<ContactCard style={{...compAnimationForCompCard}}/>
				
				<Paper/>

			</PageStack>
		</PageBox>
	);
};

const tmpButtonObj = [
	{text:'Full-Stack Development',
		key: 'dev'
	},
	{text:'Teaching & Presentations',
		key: 'teach'
	},
	{text:'Modeling & Optimization',
		key: 'model'
	}
];