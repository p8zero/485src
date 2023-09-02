import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Modal, TouchableOpacity, Button } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const TermsConditions = () => {
  const [modalVisible, setModalVisible] = useState(false); 
  
  return (
    <View style={styles.container}>
          <TouchableOpacity
            onPress={()=>{setModalVisible(true)}}>
              <Text style={{
                color: '#18163A', 
              fontWeight: '500', 
              fontFamily: 'WorkSans-Light',
              textAlign: 'center',
              }}> 
              By Clicking Sign Up, I Agree to the Terms & Conditions</Text>
              <Modal
                transparent={true}
                visible={modalVisible}
                  onRequestClose={() => setModalVisible(false)}>
                <View 
                  style={{
                    backgroundColor:"#FFF5EF", 
                    margin:'5%', 
                    padding:20,
                    borderRadius: 10,
                    flex:1,
                  }}>
                  <View style={styles.modalHeaderContent}>
                      <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Ionicons 
                            name="close" 
                            size={30}
                            style={
                              styles.modalHeaderCloseIcon
                            }
                        />                        
                      </TouchableOpacity>
                  </View>
                  <ScrollView 
                    style={{paddingTop: 20}}>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 24,  color: '#18163A'}}>
                      Naralytics Terms of Use
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 18,  color: '#18163A', marginTop: '2%'}}>
                      (Effective as of 5/5/2023)
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '5%'}}>
                      Welcome to the Naralytics’ Terms of Use agreement. For purposes of this agreement, “Service” refers to the Company’s application and the services that it provides, which can be downloaded from the Apple App Store or Google Play Store. The terms “we,” “us,” and “our” refer to the Company, which is Naralytics, Inc. “You” refers to you, as a user of our Service. 
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      The following Terms of Use apply when you view or use the Service. 
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      Please review the following terms carefully. By accessing or using the Service, you signify your agreement to these Terms of Use. If you do not agree to be bound by these Terms of Use in their entirety, you may not access or use the Service.  
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      PRIVACY POLICY
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      The Company respects the privacy of its Service users. Please refer to the Company’s Privacy Policy (found below and in the “Settings” section of the Service) which explains how we collect, use, and disclose information that pertains to your privacy. When you access or use the Service, you signify your agreement to the Privacy Policy as well as these Terms of Use.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      ABOUT THE SERVICE
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      The Service allows you to:
1)	Create personas and narratives which are representations of people and relationship situations.
2)	Receive a probability of subsequent behaviors that likely result from the submitted narrative.
3)	Receive a probability of the likely motivations of the personas within a submitted narrative.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      REGISTRATION; RULES FOR USER CONDUCT AND USE OF THE SERVICE
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      You need to be at least 13 years old to register for and use the Service.
If you are a user who signs up for the Service, you will create a personalized account which includes a unique username and a password to access the Service and to receive messages from the Company. You agree to notify us immediately of any unauthorized use of your password and/or account. The Company will not be responsible for any liabilities, losses, or damages arising out of the unauthorized use of your member name, password and/or account.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      USE RESTRICTIONS
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      Your permission to use the Service is conditioned upon the following use, posting and conduct restrictions: 
You agree that you will not under any circumstances:
1)	access the Service for any reason other than your personal, non-commercial use solely as permitted by the normal functionality of the Service,
2)	collect or harvest any personal data of any user of the Service 
3)	use the Service for the solicitation of business in the course of trade or in connection with a commercial enterprise;
4)	distribute any part or parts of the Service without our explicit written permission;
5)	use the Service for any unlawful purpose or for the promotion of illegal activities;
6)	attempt to, or harass, abuse or harm another person or group;
7)	use another user’s account without permission;
8)	intentionally allow another user to access your account; 
9)	provide false or inaccurate information when registering an account;
10)	interfere or attempt to interfere with the proper functioning of the Service;
11)	make any automated use of the Service or the related systems, or take any action that we deem to impose or to potentially impose an unreasonable or disproportionately large load on our servers or network infrastructure;
12)	bypass any robot exclusion headers or other measures we take to restrict access to the Service, or use any software, technology, or device to scrape, spider, or crawl the Service or harvest or manipulate data; 
13)	circumvent, disable or otherwise interfere with any security-related features of the Service or features that prevent or restrict use or copying of content, or enforce limitations on use of the Service or the content accessible via the Service; or 
14)	publish or link to malicious content of any sort, including that intended to damage or disrupt another user’s phone.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      POSTING AND CONDUCT RESTRICTIONS
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      When you create your own personalized account, you generate content from usage of the features within the Service (“User Content”). You are solely responsible for the User Content that you create, submit or otherwise make available via the Service. 
You agree that we are only acting as a passive conduit should you distribute and make public any of your User Content. The Company, however, reserves the right to remove any User Content from the Service at its sole discretion.
We grant you permission to use and access the Service, subject to the following express conditions surrounding User Content. You agree that failure to adhere to any of these conditions constitutes a material breach of these Terms. 
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      By transmitting and submitting any User Content while using the Service, you agree as follows:
1)	You are solely responsible for your account and the activity that occurs while signed in to or while using your account;
2)	You will not create or distribute any information that is malicious, libelous, false or inaccurate;
3)	You will not create or distribute any information that is abusive, threatening, obscene, defamatory, libelous, or racially, sexually, religiously, or otherwise objectionable and offensive;
4)	You will not submit content that is copyrighted or subject to third party proprietary rights, including privacy, publicity, trade secret, or others, unless you are the owner of such rights or have the appropriate permission from their rightful owner to specifically submit such content; and
5)	You hereby agree that we have the right to determine whether your User Content submissions are appropriate and comply with these Terms of Service, remove any and/or all of your submissions, and terminate your account with or without prior notice.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      You understand and agree that any liability, loss or damage that occurs as a result of the use of any User Content that you make available or access through your use of the Service is solely your responsibility. The Service is not responsible for any public display or misuse of your User Content. 
The Company does not, and cannot, pre-screen or monitor all User Content. However, at our discretion, we, or technology we employ, may monitor and/or record your interactions with the Service or with other Users.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      DATA RIGHTS
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      You retain all ownership rights in your User Content but you are required to grant the following rights to the Company as set forth more fully under the “License Grant” and “Intellectual Property” provisions below: When you create or submit User Content within the Service, you grant to the Company a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform that User Content in connection with the provision of the Service and under these Terms of Use.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      LICENSE GRANT
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      By posting any User Content via the Service, you expressly grant, and you represent and warrant that you have a right to grant, to the Company a royalty-free, sublicensable, transferable, perpetual, irrevocable, non-exclusive, worldwide license to use, reproduce, modify, publish, list information regarding, edit, translate, distribute, publicly perform, publicly display, and make derivative works of all such User Content and your name, voice, and/or likeness as contained in your User Content, if applicable, in whole or in part, and in any form, media or technology, whether now known or hereafter developed, for use in connection with the Service.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      INTELLECTUAL PROPERTY
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      You acknowledge and agree that we and our licensors retain ownership of all intellectual property rights of any kind related to the Service, including applicable copyrights, trademarks and other proprietary rights. Other product and company names that are mentioned on the Service may be trademarks of their respective owners. We reserve all rights that are not expressly granted to you under these Terms of Use.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      ONLINE CONTENT DISCLAIMER
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      Opinions, advice, statements, offers, or other information or content made available through the Service are those of their respective authors, and should not necessarily be relied upon. Such authors are solely responsible for such content. 
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      We do not guarantee the accuracy, completeness, or usefulness of any information on the Service nor do we adopt nor endorse, nor are we responsible for, the accuracy or reliability of any opinion, advice, or statement made by other parties. We take no responsibility and assume no liability for any User Content that you or any other user or third party posts or sends via the Service. Under no circumstances will we be responsible for any loss or damage resulting from anyone’s reliance on information or other content posted on the Service, or transmitted to users.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      Though we strive to enforce these Terms of Use, you may be exposed to User Content that is inaccurate or objectionable when you use or access the Service. We reserve the right, but have no obligation, to monitor the materials posted in the Service or to limit or deny a user’s access to the Service or take other appropriate action if a user violates these Terms of Use or engages in any activity that violates the rights of any person or entity or which we deem unlawful, offensive, abusive, harmful or malicious. Messages sent between you and other participants that are not readily accessible to the general public will be treated by us as private to the extent required by applicable law. The Company shall have the right to remove any material that in its sole opinion violates, or is alleged to violate, the law or this agreement or which might be offensive, or that might violate the rights, harm, or threaten the safety of users or others.  Unauthorized use may result in criminal and/or civil prosecution under Federal, State and local law. If you become aware of a misuse of our Service or violation of these Terms of Use, please contact us at www.naralytics.com.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      LINKS TO OTHER SITES AND/OR MATERIALS
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      As part of the Service, we may provide you with convenient links to third party website(s) or applications (“Third Party Sites”) as well as content or items belonging to or originating from third parties (the “Third Party Applications, Software or Content”). These links are provided as a courtesy to Service subscribers. We have no control over Third Party Sites or Third Party Applications, Software or Content or the promotions, materials, information, goods or services available on these Third Party Sites or Third Party Applications, Software or Content. Such Third Party Sites and Third Party Applications, Software or Content are not investigated, monitored or checked for accuracy, appropriateness, or completeness, and we are not responsible for any Third Party Sites accessed through the Service or any Third Party Applications, Software or Content posted on, available through or installed from the Service, including the content, accuracy, offensiveness, opinions, reliability, privacy practices or other policies of or contained in the Third Party Sites or the Third Party Applications, Software or Content. Inclusion of, linking to or permitting the use or installation of any Third Party Site or any Third Party Applications, Software or Content does not imply our approval or endorsement. If you decide to leave the Service and access the Third Party Sites or to use or install any Third Party Applications, Software or Content, you do so at your own risk and you should be aware that our terms and policies, including these Terms of Use, no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any Third Party Site to which you navigate from the Service or relating to any applications you use or install from the Third Party Site.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      COPYRIGHT COMPLAINTS AND COPYRIGHT AGENT
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      (a) Termination of Repeat Infringer Accounts. We respect the intellectual property rights of others and requires that the users do the same. Pursuant to 17 U.S.C. 512(i) of the United States Copyright Act, we have adopted and implemented a policy that provides for the termination in appropriate circumstances of users of the Service who are repeat infringers. We may terminate access for participants or users who are found repeatedly to provide or post protected third party content without necessary rights and permissions.
(b) DMCA Take-Down Notices.  If you are a copyright owner or an agent thereof and believe, in good faith, that any materials provided on the Service infringe upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act (see 17 U.S.C 512) (“DMCA”) by sending the following information in writing to our designated copyright agent at 7255 Charmant Ave, Apt 724, San Diego, CA 92122.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      
1.   The date of your notification;
2.   A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;
3.   A description of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;
4.   A description of the material that is claimed to be infringing or to be the subject of infringing activity and information sufficient to enable us to locate such work;
5.   Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and/or email address;
6.   A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and
7.   A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.

                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      (c) Counter-Notices. If you believe that your User Content that has been removed from the Service is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the content in your User Content, you may send a counter-notice containing the following information to our copyright agent using the contact information set forth above:
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      1.   Your physical or electronic signature;
2.   A description of the content that has been removed and the location at which the content appeared before it was removed;
3.   A statement that you have a good faith belief that the content was removed as a result of mistake or a misidentification of the content; and
4.   Your name, address, telephone number, and email address, a statement that you consent to the jurisdiction of the federal court in Delaware and a statement that you will accept service of process from the person who provided notification of the alleged infringement.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      If a counter-notice is received by our copyright agent, we may send a copy of the counter-notice to the original complaining party informing such person that it may reinstate the removed content in ten (10) business days. Unless the copyright owner files an action seeking a court order against the content provider, member or user, the removed content may (in our sole discretion) be reinstated on the Service in ten (10) to fourteen (14) business days or more after receipt of the counter-notice.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      EMAIL MAY NOT BE USED TO PROVIDE NOTICE
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      Communications made through the Service’s email and messaging system will not constitute legal notice to the Company, the Service, or any of its officers, employees, agents or representatives in any situation where legal notice is required by contract or any law or regulation.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      USER CONSENT TO RECEIVE COMMUNICATIONS IN ELECTRONIC FORM
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      For contractual purposes, you: (a) consent to receive communications from us in an electronic form via the email address you have submitted; and (b) agree that all Terms of Use, agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications would satisfy if it were in writing. The foregoing does not affect your non-waivable rights.

We may also use your email address to send you other messages, including information about the Company or the Service and special offers. You may opt out of such email by changing your account settings, using the “Unsubscribe” link in the message or sending a message through our website at www.naralytics.com
Opting out may prevent you from receiving messages regarding the Company, the Service or special offers.

                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      WARRANTY DISCLAIMER
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      THE SERVICE, IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, REGARDING THE SERVICE INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, SECURITY, ACCURACY AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE MAKE NO WARRANTY OR REPRESENTATION THAT ACCESS TO OR OPERATION OF THE SERVICE WILL BE UNINTERRUPTED OR ERROR FREE. YOU ASSUME FULL RESPONSIBILITY AND RISK OF LOSS RESULTING FROM YOUR DOWNLOADING AND/OR USE OF FILES, INFORMATION, CONTENT OR OTHER MATERIAL OBTAINED FROM THE SERVICE. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF WARRANTY, SO THIS PROVISION MAY NOT APPLY TO YOU.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      LIMITATION OF DAMAGES
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      RELEASE TO THE EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, THE SERVICE, ITS AFFILIATES, DIRECTORS, OR EMPLOYEES, OR ITS LICENSORS OR PARTNERS, BE LIABLE TO YOU FOR ANY LOSS OF PROFITS, USE,  OR DATA, OR FOR ANY INCIDENTAL, INDIRECT, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, HOWEVER ARISING, THAT RESULT FROM: (A) THE USE OF ANY AND ALL INFORMATION PROVIDED BY THE SERVICE (B) THE USE, DISCLOSURE, OR DISPLAY OF YOUR USER CONTENT; (C) YOUR USE OR INABILITY TO USE THE SERVICE; (D) THE SERVICE GENERALLY OR THE SOFTWARE OR SYSTEMS THAT MAKE THE SERVICE AVAILABLE; OR (E) ANY OTHER INTERACTIONS WITH USE OR WITH ANY OTHER USER OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF LIABILITY, SO THIS PROVISION MAY NOT APPLY TO YOU.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      If you have a dispute with one or more users, you release us (and our officers, directors, agents, subsidiaries, joint ventures and employees) from claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes. 
If you are a California resident using the Service, you may specifically waive California Civil Code §1542, which says: “A general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which if known by him must have materially affected his settlement with the debtor.”
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      MODIFICATION OF TERMS OF USE
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      We can amend these Terms of Use at any time and will update these Terms of Use in the event of any such amendments. It is your sole responsibility to check the Service from time to time to view any such changes in this agreement. Your continued use of the Service signifies your agreement to our revisions to these Terms of Use. We will endeavor to notify you of material changes to the Terms by posting a notice on our homepage and/or sending an email to the email address you provided to us upon registration. For this additional reason, you should keep your contact and profile information current. Any changes to these Terms (other than as set forth in this paragraph) or waiver of our rights hereunder shall not be valid or effective except in a written agreement bearing the physical signature of one of our officers. No purported waiver or modification of this agreement on our part via telephonic or email communications shall be valid.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      GENERAL TERMS
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      If any part of this Terms of Use agreement is held or found to be invalid or unenforceable, that portion of the agreement will be construed as to be consistent with applicable law while the remaining portions of the agreement will remain in full force and effect. Any failure on our part to enforce any provision of this agreement will not be considered a waiver of our right to enforce such provision. Our rights under this agreement survive any transfer or termination of this agreement.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      You agree that any cause of action related to or arising out of your relationship with the Company must commence within ONE year after the cause of action accrues. Otherwise, such cause of action is permanently barred.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      These Terms of Use and your use of the Service are governed by the federal laws of the United States of America and the laws of the State of Delware without regard to conflict of law provisions.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      We may assign or delegate these Terms of Service and/or our Privacy Policy, in whole or in part, to any person or entity at any time with or without your consent. You may not assign or delegate any rights or obligations under the Terms of Service or Privacy Policy without our prior written consent, and any unauthorized assignment or delegation by you is void.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE, UNDERSTAND THE TERMS OF USE, AND WILL BE BOUND BY THESE TERMS AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS OF USE TOGETHER WITH THE PRIVACY POLICY REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US AND THAT IT SUPERSEDES ANY PROPOSAL OR PRIOR AGREEMENT ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE SUBJECT MATTER OF THIS AGREEMENT.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 24,  color: '#18163A', marginTop:'10%'}}>
                     NARALYTICS PRIVACY POLICY
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      Naralytics (the “Company”) is committed to maintaining robust privacy protections for its users.  Our Privacy Policy (“Privacy Policy”) is designed to help you understand how we collect, use and safeguard the information you provide to us and to assist you in making informed decisions when using our Service.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      For purposes of this Agreement, “App” refers to the Company’s mobile application, nara, which can be downloaded via the Apple App Store or Google Play Store.
“Service” refers to the Company’s services accessed via the App. 
The terms “we,” “us,” and “our” refer to the Company, which is Naralytics, Inc.
“You” means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
By accessing our Service, you accept our Privacy Policy and Terms of Use and you consent to our collection, storage, use and disclosure of your Personal Information as described in this Privacy Policy.

                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      I. INFORMATION WE COLLECT
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      We collect “Non-Personal Information” and “Personal Information.” Non-Personal Information includes information that cannot be used to personally identify you, such as anonymous usage data, general demographic information we may collect, platform types, preferences you submit and preferences that are generated based on the data you submit and number of clicks. Personal Information includes your email and date of birth which you submit to us through the registration process in our app.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      1. Information collected via Technology
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      To activate the Service you do not need to submit any Personal Information other than your email address and date of birth. To use the Service thereafter, you do not need to submit further Personal Information. However, in an effort to improve the quality of the Service, we track information provided to us by you when you use the Service, such the device from which you connected to the Service, the time and date of access, and other information that does not personally identify you. 
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      2. Information you provide us by registering for an account
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      In addition to the information provided automatically by the App when you visit the Service, to become a subscriber to the Service you will need to create a personal profile. You can create a profile by registering with the Service and entering your email address and date of birth, and creating a user name and a password. By registering, you are authorizing us to collect, store and use your email address and date of birth in accordance with this Privacy Policy.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      3. Children’s Privacy
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      The Service are not directed to anyone under the age of 13. The Service does not knowingly collect or solicit information from anyone under the age of 13, or allow anyone under the age of 13 to sign up for the Service. In the event that we learn that we have gathered personal information from anyone under the age of 13 without the consent of a parent or guardian, we will delete that information as soon as possible. If you believe we have collected such information, please contact us at www.naralytics.com.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      II. HOW WE USE AND SHARE INFORMATION
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '5%'}}>
                      Personal Information
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      Except as otherwise stated in this Privacy Policy, we do not sell, trade, rent or otherwise share for marketing purposes your Personal Information with third parties without your consent. We do share Personal Information with vendors who are performing services for the Company, such as the servers for our email communications who are provided access to user’s email address for purposes of sending emails from us. Those vendors use your Personal Information only at our direction and in accordance with our Privacy Policy.
In general, the Personal Information you provide to us is used to help us communicate with you. For example, we use Personal Information to contact users in response to questions, solicit feedback from users, provide technical support, and inform users about promotional offers.

                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      We may share Personal Information with outside parties if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable legal process or enforceable governmental request; to enforce applicable Terms of Service, including investigation of potential violations; address fraud, security or technical concerns; or to protect against harm to the rights, property, or safety of our users or the public as required or permitted by law. 
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '5%'}}>
                      Non-Personal Information
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      In general, we use Non-Personal Information to help us improve the Service and customize the user experience. We also aggregate Non-Personal Information in order to track trends and analyze use patterns on the Site. This Privacy Policy does not limit in any way our use or disclosure of Non-Personal Information and we reserve the right to use and disclose such Non-Personal Information to our partners, advertisers and other third parties at our discretion.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      In the event we undergo a business transaction such as a merger, acquisition by another company, or sale of all or a portion of our assets, your Personal Information may be among the assets transferred. You acknowledge and consent that such transfers may occur and are permitted by this Privacy Policy, and that any acquirer of our assets may continue to process your Personal Information as set forth in this Privacy Policy. If our information practices change at any time in the future, we will post the policy changes to the App so that you may opt out of the new information practices. We suggest that you check the App periodically if you are concerned about how your information is used.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      III. HOW WE PROTECT INFORMATION
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      We implement security measures designed to protect your information from unauthorized access. Your account is protected by your account password and we urge you to take steps to keep your personal information safe by not disclosing your password and by logging out of your account after each use. We further protect your information from potential security breaches by implementing certain technological security measures including encryption, firewalls and secure socket layer technology. However, these measures do not guarantee that your information will not be accessed, disclosed, altered or destroyed by breach of such firewalls and secure server software. By using our Service, you acknowledge that you understand and agree to assume these risks.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      IV. TRANSFER OF YOUR PERSONAL DATA
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      Your Personal and Non-Personal information is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction. Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer. 
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      V. YOUR RIGHTS REGARDING THE USE OF YOUR PERSONAL INFORMATION
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      You have the right at any time to prevent us from contacting you for marketing purposes.  When we send a promotional communication to a user, the user can opt out of further promotional communications by following the unsubscribe instructions provided in each promotional e-mail. Please note that notwithstanding the promotional preferences you indicate by either unsubscribing, we may continue to send you administrative emails including, for example, periodic updates to our Privacy Policy.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      VI. LINKS TO OTHER WEBSITES OR APPLICATIONS
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      As part of the Service, we may provide links to or compatibility with other websites or applications. However, we are not responsible for the privacy practices employed by those websites or the information or content they contain. This Privacy Policy applies solely to information collected by us through the Service. Therefore, this Privacy Policy does not apply to your use of a third party website or application accessed by selecting a link on our Service. To the extent that you access or use the Service through or on another website or application, then the privacy policy of that other website or application will apply to your access or use of that site or application. We encourage our users to read the privacy statements of other websites before proceeding to use them.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      VII. CHANGES TO OUR PRIVACY POLICY
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      The Company reserves the right to change this policy and our Terms of Service at any time.  We will notify you of significant changes to our Privacy Policy by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site. Significant changes will go into effect 30 days following such notification. Non-material changes or clarifications will take effect immediately. You should periodically check the App and this privacy page for updates.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '400', fontSize: 20,  color: '#18163A', marginTop: '5%'}}>
                      VIII. CONTACT US
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%'}}>
                      If you have any questions regarding this Privacy Policy or the practices of this Site, please contact us through our website at www.naralytics.com.
                      </Text>
                      <Text style={{fontFamily: 'WorkSans-Light', fontWeight: '300', fontSize: 16,  color: '#18163A', marginTop: '2%', marginBottom: '10%'}}>
                      Last Updated: This Privacy Policy was last updated on 5/5/2023.
                      </Text>
                  </ScrollView>
              </View>
              </Modal>
            </TouchableOpacity>
    </View> 
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  modalHeader: {
    flexDirection: "row",
  },
  modalHeaderContent: {
    flexGrow: 1,
  },
  modalHeaderTitleText:{
    textAlign: "center",
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 22,
    fontWeight: '400',
    fontFamily: 'WorkSans-Light'
  },
   modalHeaderCloseIcon: {
    color: 'black',
    marginTop:0,
    marginBottom: 10,
    alignSelf: 'flex-end'  }
  
});

export default TermsConditions; 