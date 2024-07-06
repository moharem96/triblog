const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("id");

// Example data; you can replace this with data fetched from an API or a database
const articles = {
	1: {
		title: "Races and Events",
		image: "./images/medal.jpeg",
		content: `
		<article id="overview">
			<h2>Overview of Triathlon Races</h2>
			<p>Triathlon races come in various formats and distances, catering to athletes of all levels. From the short-distance sprints to the grueling Ironman races, each event offers unique challenges and experiences.</p>
		</article>

		<article id="types" class="articles">
			<h3>Types of Triathlon Races</h3>
			<p>Triathlons can vary significantly in distance. The main types include:</p>
			<ul>
				<li><strong>Sprint Triathlon:</strong> Typically consists of a 750m swim, 20km bike ride, and 5km run. Ideal for beginners and those looking for a quick, intense race.</li>
				<li><strong>Olympic Triathlon:</strong> Also known as the standard distance, it includes a 1.5km swim, 40km bike ride, and 10km run.</li>
				<li><strong>Half-Ironman:</strong> Known as Ironman 70.3, this race covers a 1.9km swim, 90km bike ride, and 21.1km run.</li>
				<li><strong>Ironman:</strong> The ultimate challenge, with a 3.8km swim, 180km bike ride, and a full marathon (42.2km) run.</li>
			</ul>
		</article>

		<article id="events" class="articles">
			<h3>Major Triathlon Events</h3>
			<p>Several key events stand out in the triathlon calendar, attracting participants from all over the world:</p>
			<ul>
				<li><strong>Ironman World Championship:</strong> Held annually in Kailua-Kona, Hawaii, this is the most prestigious event in the triathlon world, known for its challenging course and hot, windy conditions.</li>
				<li><strong>Olympic Triathlon:</strong> Featured in the Summer Olympics, this event follows the standard Olympic distance and showcases the sport on an international stage.</li>
				<li><strong>ITU World Triathlon Series:</strong> A series of races held in various locations globally, where athletes compete for points to become the world champion.</li>
			</ul>
		</article>

		<article id="preparation" class="articles">
			<h3>Preparing for a Triathlon</h3>
			<p>Training for a triathlon involves a balanced regimen of swimming, cycling, and running. Key preparation tips include:</p>
			<ul>
				<li><strong>Training Plan:</strong> Follow a structured training plan that includes workouts for each discipline, rest days, and gradual intensity increases.</li>
				<li><strong>Nutrition:</strong> Maintain a balanced diet that fuels your workouts and aids recovery. Stay hydrated and consider the nutritional needs specific to each race distance.</li>
				<li><strong>Gear:</strong> Invest in essential gear such as a good quality triathlon suit, wetsuit for open water swims, a reliable bike, and proper running shoes.</li>
			</ul>
		</article>
	`,
	},
	2: {
		title: "Challenges",
		image: "./images/ironman-finisher.jpg",
		content: `
		<article id="overview">
			<h2>Physical Demands</h2>
			<p>Triathlons are known for their grueling physical demands. Participants must be prepared for the intense endurance required across three disciplines: swimming, cycling, and running. Each discipline presents unique challenges that test the limits of an athlete's strength, stamina, and mental toughness.</p>
		</article>

		<article id="training" class="articles">
			<h3>Training and Preparation</h3>
			<p>Effective training is crucial for success in triathlons. Athletes need to follow a rigorous training schedule that balances workouts across all three disciplines. Key components of training include:</p>
			<ul>
				<li><strong>Swim Training:</strong> Focus on building endurance and improving technique. Open water swims are essential for acclimatization.</li>
				<li><strong>Bike Training:</strong> Incorporate long rides, interval training, and hill climbs to build strength and endurance.</li>
				<li><strong>Run Training:</strong> Include long runs, speed work, and brick workouts (bike-to-run sessions) to simulate race conditions.</li>
			</ul>
		</article>

		<article id="nutrition" class="articles">
			<h3>Nutrition and Hydration</h3>
			<p>Proper nutrition and hydration are critical for peak performance and recovery. Athletes must focus on:</p>
			<ul>
				<li><strong>Pre-Race Nutrition:</strong> Consume a balanced diet rich in carbohydrates, proteins, and fats to fuel training and recovery.</li>
				<li><strong>Race Day Nutrition:</strong> Eat easily digestible foods before the race and consume energy gels, bars, and drinks during the race.</li>
				<li><strong>Hydration:</strong> Stay hydrated by drinking water and electrolyte-rich fluids regularly, especially during long training sessions and races.</li>
			</ul>
		</article>

		<article id="mental-preparation" class="articles">
			<h3>Mental Preparation</h3>
			<p>Mental toughness is as important as physical fitness in triathlons. Athletes must develop strategies to stay motivated and focused, such as:</p>
			<ul>
				<li><strong>Goal Setting:</strong> Set realistic, measurable goals for training and race day.</li>
				<li><strong>Visualization:</strong> Practice visualization techniques to mentally rehearse the race and anticipate challenges.</li>
				<li><strong>Stress Management:</strong> Develop coping strategies for race-day nerves and unexpected situations.</li>
			</ul>
		</article>
	`,
	},

	3: {
		title: "Equipment & Gear",
		image: "./images/septastic.jpeg",
		content: `
		<article id="overview">
			<h2>Overview of Triathlon Equipment</h2>
			<p>Having the right equipment and gear is crucial for a successful triathlon experience. From the swim to the bike and run, each segment requires specialized gear to ensure performance and comfort.</p>
		</article>

		<article id="swim-gear" class="articles">
			<h3>Swim Gear</h3>
			<p>Essential swim gear includes:</p>
			<ul>
				<li><strong>Wetsuit:</strong> Provides buoyancy and thermal protection in open water swims.</li>
				<li><strong>Goggles:</strong> Ensure clear vision and eye protection in the water.</li>
				<li><strong>Swim Cap:</strong> Reduces drag and keeps hair out of the way.</li>
			</ul>
		</article>

		<article id="bike-gear" class="articles">
			<h3>Bike Gear</h3>
			<p>Key bike gear includes:</p>
			<ul>
				<li><strong>Triathlon Bike:</strong> Designed for aerodynamics and speed, with specialized geometry for triathletes.</li>
				<li><strong>Helmet:</strong> Mandatory for safety, must meet specific standards.</li>
				<li><strong>Cycling Shoes:</strong> Clip into pedals for efficient power transfer.</li>
				<li><strong>Bike Repair Kit:</strong> Includes spare tubes, tire levers, and a mini pump for on-the-go repairs.</li>
			</ul>
		</article>

		<article id="run-gear" class="articles">
			<h3>Run Gear</h3>
			<p>Essential run gear includes:</p>
			<ul>
				<li><strong>Running Shoes:</strong> Provide comfort, support, and performance for long-distance running.</li>
				<li><strong>Running Apparel:</strong> Lightweight and moisture-wicking fabrics to keep you cool and dry.</li>
				<li><strong>Hydration Belt:</strong> Allows easy access to fluids during the run.</li>
			</ul>
		</article>

		<article id="transition-gear" class="articles">
			<h3>Transition Gear</h3>
			<p>Efficient transitions can save valuable time. Key transition gear includes:</p>
			<ul>
				<li><strong>Transition Bag:</strong> Keeps all your gear organized and easily accessible.</li>
				<li><strong>Race Belt:</strong> Holds your race number and can be quickly fastened during transitions.</li>
				<li><strong>Body Glide:</strong> Prevents chafing and blisters during the race.</li>
			</ul>
		</article>
	`,
	},

	4: {
		title: "Transitions",
		image: "./images/transitions.avif",
		content: `
		<article id="overview">
			<h2>Overview of Transitions</h2>
			<p>In triathlon, transitions are the periods between the swim, bike, and run segments. Efficient transitions can save valuable time and improve your overall race performance. They are often referred to as the "fourth discipline" of triathlon.</p>
		</article>

		<article id="t1" class="articles">
			<h3>Transition 1 (T1): Swim to Bike</h3>
			<p>Key considerations for a smooth T1 transition include:</p>
			<ul>
				<li><strong>Wetsuit Removal:</strong> Practice quickly removing your wetsuit while heading towards your bike.</li>
				<li><strong>Gear Setup:</strong> Lay out your bike gear in an organized manner. Place your helmet, sunglasses, and cycling shoes in easy-to-reach positions.</li>
				<li><strong>Mounting the Bike:</strong> Familiarize yourself with the mounting area and practice mounting your bike efficiently.</li>
			</ul>
		</article>

		<article id="t2" class="articles">
			<h3>Transition 2 (T2): Bike to Run</h3>
			<p>Key considerations for a smooth T2 transition include:</p>
			<ul>
				<li><strong>Disassembling from Bike:</strong> Practice dismounting your bike before the dismount line.</li>
				<li><strong>Gear Setup:</strong> Organize your run gear, including running shoes, hat, and race belt.</li>
				<li><strong>Quick Change:</strong> Efficiently switch from cycling to running gear to minimize time spent in transition.</li>
			</ul>
		</article>

		<article id="tips" class="articles">
			<h3>Transition Tips and Tricks</h3>
			<p>Enhance your transition times with these tips:</p>
			<ul>
				<li><strong>Practice Transitions:</strong> Regularly practice your transitions to develop muscle memory and efficiency.</li>
				<li><strong>Visualize:</strong> Mentally rehearse your transitions to ensure a smooth process on race day.</li>
				<li><strong>Stay Organized:</strong> Keep your transition area tidy and organized to avoid fumbling for gear.</li>
				<li><strong>Stay Calm:</strong> Maintain composure and focus during transitions to execute them efficiently.</li>
			</ul>
		</article>
	`,
	},

	5: {
		title: "Hydration During the Bike Course",
		image: "./images/hydration.webp",
		content: `
		<article id="overview">
			<h2>Importance of Hydration</h2>
			<p>Maintaining proper hydration is crucial during the bike course of a triathlon. Hydration helps regulate body temperature, maintain blood flow, and prevent dehydration, which can significantly impact performance.</p>
		</article>

		<article id="hydration-strategies" class="articles">
			<h3>Hydration Strategies</h3>
			<p>Effective hydration strategies for the bike course include:</p>
			<ul>
				<li><strong>Pre-Hydration:</strong> Start hydrating well before the race begins to ensure your body is well-prepared.</li>
				<li><strong>Regular Intake:</strong> Sip fluids regularly throughout the bike course rather than waiting until you feel thirsty.</li>
				<li><strong>Electrolyte Balance:</strong> Use electrolyte drinks to replenish essential minerals lost through sweat.</li>
			</ul>
		</article>

		<article id="hydration-systems" class="articles">
			<h3>Hydration Systems</h3>
			<p>Choosing the right hydration system can make a significant difference in maintaining hydration levels. Common systems include:</p>
			<ul>
				<li><strong>Bike Bottle Cages:</strong> Standard bottle cages mounted on the bike frame for easy access.</li>
				<li><strong>Aero Hydration Systems:</strong> Integrated systems mounted on the aerobars for minimal aerodynamic drag.</li>
				<li><strong>Hydration Backpacks:</strong> Useful for longer distances, providing a larger fluid capacity and hands-free drinking.</li>
			</ul>
		</article>

		<article id="hydration-tips" class="articles">
			<h3>Hydration Tips</h3>
			<p>Enhance your hydration strategy with these tips:</p>
			<ul>
				<li><strong>Know Your Sweat Rate:</strong> Understand your sweat rate to determine how much fluid you need to consume.</li>
				<li><strong>Practice Hydration:</strong> Integrate your hydration strategy into training sessions to get accustomed to drinking on the bike.</li>
				<li><strong>Avoid Overhydration:</strong> Balance fluid intake to avoid overhydration, which can lead to hyponatremia.</li>
				<li><strong>Monitor Weather Conditions:</strong> Adjust your hydration strategy based on the weather, consuming more fluids in hot and humid conditions.</li>
			</ul>
		</article>
	`,
	},

	6: {
		title: "Injury Prevention",
		image: "./images/injury.jpeg",
		content: `
		<article id="overview">
			<h2>Overview of Injury Prevention</h2>
			<p>Injury prevention is crucial for triathletes to maintain consistent training and achieve peak performance. Proper techniques, conditioning, and recovery strategies can significantly reduce the risk of injuries.</p>
		</article>

		<article id="common-injuries" class="articles">
			<h3>Common Injuries in Triathlon</h3>
			<p>Triathletes are prone to several common injuries due to the repetitive nature of the sport. These include:</p>
			<ul>
				<li><strong>Swimmer's Shoulder:</strong> Caused by repetitive overhead movements in swimming.</li>
				<li><strong>Runner's Knee:</strong> Pain around the kneecap due to running on hard surfaces or improper footwear.</li>
				<li><strong>Achilles Tendonitis:</strong> Inflammation of the Achilles tendon from overuse or improper stretching.</li>
				<li><strong>Lower Back Pain:</strong> Often due to poor bike fit or weak core muscles.</li>
			</ul>
		</article>

		<article id="prevention-strategies" class="articles">
			<h3>Injury Prevention Strategies</h3>
			<p>Effective injury prevention strategies include:</p>
			<ul>
				<li><strong>Proper Warm-Up:</strong> Always start workouts with a thorough warm-up to prepare muscles and joints for activity.</li>
				<li><strong>Strength Training:</strong> Incorporate strength training to build muscle balance and support for key joints.</li>
				<li><strong>Flexibility Exercises:</strong> Regularly perform stretching and flexibility exercises to maintain range of motion.</li>
				<li><strong>Cross-Training:</strong> Include cross-training activities to reduce repetitive stress on specific muscles and joints.</li>
			</ul>
		</article>

		<article id="recovery" class="articles">
			<h3>Recovery Techniques</h3>
			<p>Proper recovery is essential for injury prevention and overall performance. Key recovery techniques include:</p>
			<ul>
				<li><strong>Rest Days:</strong> Schedule regular rest days to allow the body to heal and recover.</li>
				<li><strong>Massage Therapy:</strong> Use massage therapy to alleviate muscle tension and promote circulation.</li>
				<li><strong>Foam Rolling:</strong> Incorporate foam rolling to release muscle tightness and improve mobility.</li>
				<li><strong>Hydration and Nutrition:</strong> Maintain adequate hydration and a balanced diet to support recovery.</li>
			</ul>
		</article>

		<article id="professional-guidance" class="articles">
			<h3>Professional Guidance</h3>
			<p>Seeking professional guidance can help prevent and manage injuries effectively. Consider the following:</p>
			<ul>
				<li><strong>Physiotherapy:</strong> Regular sessions with a physiotherapist can address any imbalances and prevent injuries.</li>
				<li><strong>Coaching:</strong> Work with a coach to ensure your training plan is balanced and suitable for your fitness level.</li>
				<li><strong>Medical Check-Ups:</strong> Regular check-ups with a sports medicine doctor to monitor your health and address any concerns early.</li>
			</ul>
		</article>
	`,
	},

	7: {
		title: "Mental Preparation",
		image: "./images/mental-preparation.jpeg",
		content: `
		<article id="overview">
			<h2>Overview of Mental Preparation</h2>
			<p>Mental preparation is a critical aspect of triathlon training and competition. Developing mental toughness and resilience can help athletes overcome challenges, stay focused, and achieve their performance goals.</p>
		</article>

		<article id="goal-setting" class="articles">
			<h3>Goal Setting</h3>
			<p>Setting clear, achievable goals is essential for maintaining motivation and direction. Key strategies include:</p>
			<ul>
				<li><strong>SMART Goals:</strong> Ensure your goals are Specific, Measurable, Achievable, Relevant, and Time-bound.</li>
				<li><strong>Short-Term and Long-Term Goals:</strong> Set both short-term goals for immediate focus and long-term goals for overall direction.</li>
				<li><strong>Progress Tracking:</strong> Regularly monitor your progress and adjust your goals as needed.</li>
			</ul>
		</article>

		<article id="visualization" class="articles">
			<h3>Visualization Techniques</h3>
			<p>Visualization can help athletes mentally rehearse their performance, build confidence, and reduce anxiety. Effective techniques include:</p>
			<ul>
				<li><strong>Positive Imagery:</strong> Visualize successful performances and overcoming challenges.</li>
				<li><strong>Detailed Visualization:</strong> Imagine every detail of the race, from the start to the finish, including transitions.</li>
				<li><strong>Regular Practice:</strong> Incorporate visualization into your regular training routine.</li>
			</ul>
		</article>

		<article id="stress-management" class="articles">
			<h3>Stress Management</h3>
			<p>Managing stress is crucial for maintaining focus and performance. Key strategies include:</p>
			<ul>
				<li><strong>Breathing Exercises:</strong> Practice deep breathing techniques to calm the mind and reduce stress.</li>
				<li><strong>Mindfulness:</strong> Engage in mindfulness practices to stay present and focused during training and competition.</li>
				<li><strong>Positive Self-Talk:</strong> Use positive affirmations and self-talk to build confidence and resilience.</li>
			</ul>
		</article>

		<article id="race-day-mental-strategies" class="articles">
			<h3>Race Day Mental Strategies</h3>
			<p>Having a mental plan for race day can help athletes stay calm, focused, and adaptable. Effective strategies include:</p>
			<ul>
				<li><strong>Pre-Race Routine:</strong> Establish a consistent pre-race routine to reduce anxiety and ensure readiness.</li>
				<li><strong>Focus Points:</strong> Identify key focus points for each segment of the race to maintain concentration.</li>
				<li><strong>Adaptability:</strong> Be prepared to adapt to unexpected challenges and maintain a positive mindset.</li>
			</ul>
		</article>
	`,
	},

	8: {
		title: "Triathlon Community",
		image: "./images/community.jpeg",
		content: `
		<article id="overview">
			<h2>Overview of the Triathlon Community</h2>
			<p>The triathlon community is a vibrant and supportive network of athletes, coaches, volunteers, and fans. This community plays a crucial role in the growth and development of the sport, offering support, motivation, and camaraderie.</p>
		</article>

		<article id="clubs-and-groups" class="articles">
			<h3>Triathlon Clubs and Groups</h3>
			<p>Joining a triathlon club or group can provide numerous benefits, including structured training, social support, and access to resources. Key points include:</p>
			<ul>
				<li><strong>Training Sessions:</strong> Participate in group training sessions to improve your skills and fitness levels.</li>
				<li><strong>Social Events:</strong> Engage in social events and activities that foster a sense of community and belonging.</li>
				<li><strong>Mentorship:</strong> Gain valuable insights and advice from more experienced athletes and coaches.</li>
			</ul>
		</article>

		<article id="volunteering" class="articles">
			<h3>Volunteering in Triathlons</h3>
			<p>Volunteering is a great way to give back to the triathlon community. Volunteers play essential roles in organizing and running events. Benefits include:</p>
			<ul>
				<li><strong>Event Support:</strong> Assist in various aspects of race organization, from setup to teardown.</li>
				<li><strong>Community Engagement:</strong> Connect with other athletes and community members through volunteering.</li>
				<li><strong>Experience:</strong> Gain firsthand experience of the behind-the-scenes work involved in triathlon events.</li>
			</ul>
		</article>

		<article id="support-and-motivation" class="articles">
			<h3>Support and Motivation</h3>
			<p>The triathlon community offers a wealth of support and motivation to help athletes stay committed to their goals. Key aspects include:</p>
			<ul>
				<li><strong>Peer Support:</strong> Share experiences and encouragement with fellow triathletes.</li>
				<li><strong>Inspiration:</strong> Draw inspiration from the achievements and stories of others in the community.</li>
				<li><strong>Accountability:</strong> Maintain accountability through group training and shared goals.</li>
			</ul>
		</article>

		<article id="online-communities" class="articles">
			<h3>Online Triathlon Communities</h3>
			<p>Online communities provide a platform for triathletes to connect, share information, and support each other. Key features include:</p>
			<ul>
				<li><strong>Forums and Discussion Boards:</strong> Participate in discussions on various topics related to triathlon training, gear, and events.</li>
				<li><strong>Social Media Groups:</strong> Join social media groups dedicated to triathlon to stay updated and engage with other athletes.</li>
				<li><strong>Training Logs and Apps:</strong> Use online tools to track your training progress and connect with other athletes for support and motivation.</li>
			</ul>
		</article>
	`,
	},
	// Add more articles as needed
};

if (articles[articleId]) {
	document.getElementById("article-title").innerText =
		articles[articleId].title;
	document.getElementById("article-img").src = articles[articleId].image;
	document.getElementById("article-img").alt = articles[articleId].title;
	document.getElementById("article-content").innerHTML =
		articles[articleId].content;
} else {
	document.getElementById("article-title").innerText =
		"Article Not Found";
	document.getElementById("article-content").innerHTML =
		"<p>The requested article could not be found.</p>";
}