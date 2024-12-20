import { useEffect } from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router'

import Mascot from './assets/procrastinix-mascot.png'

const privacyHtml = `
<article>
  <style>
    [data-custom-class='body'],
    [data-custom-class='body'] * {
      background: transparent !important;
    }

    [data-custom-class='title'],
    [data-custom-class='title'] * {
      font-family: Arial !important;
      font-size: 26px !important;
      color: #000000 !important;
    }

    [data-custom-class='subtitle'],
    [data-custom-class='subtitle'] * {
      font-family: Arial !important;
      color: #595959 !important;
      font-size: 14px !important;
    }

    [data-custom-class='heading_1'],
    [data-custom-class='heading_1'] * {
      font-family: Arial !important;
      font-size: 19px !important;
      color: #000000 !important;
    }

    [data-custom-class='heading_2'],
    [data-custom-class='heading_2'] * {
      font-family: Arial !important;
      font-size: 17px !important;
      color: #000000 !important;
    }

    [data-custom-class='body_text'],
    [data-custom-class='body_text'] * {
      color: #595959 !important;
      font-size: 14px !important;
      font-family: Arial !important;
    }

    [data-custom-class='link'],
    [data-custom-class='link'] * {
      color: #3030F1 !important;
      font-size: 14px !important;
      font-family: Arial !important;
      word-break: break-word !important;
    }
  </style>

  <div data-custom-class="body">
    <div><strong><span style="font-size: 26px;"><span data-custom-class="title">
            <bdt class="block-component"></bdt>
            <bdt class="question">PRIVACY POLICY</bdt>
            <bdt class="statement-end-if-in-editor"></bdt>
          </span></span></strong></div>
    <div><br></div>
    <div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated <bdt class="question">December 20, 2024</bdt></span></span></strong></span></div>
    <div><br></div>
    <div><br></div>
    <div><br></div>
    <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">This Privacy Notice for <bdt class="question">ProcrastiNix<bdt class="block-component"></bdt>
            </bdt> (<bdt class="block-component"></bdt>"<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"<bdt class="statement-end-if-in-editor"></bdt></span><span data-custom-class="body_text">), describes how and why we might access, collect, store, use, and/or share (<bdt class="block-component"></bdt>"<strong>process</strong>"<bdt class="statement-end-if-in-editor"></bdt>) your personal information when you use our services (<bdt class="block-component"></bdt>"<strong>Services</strong>"<bdt class="statement-end-if-in-editor"></bdt>), including when you:</span></span></span><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="block-component"></bdt>
              </span></span></span></span></span></div>
    <ul>
      <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Visit our website<bdt class="block-component"></bdt> at <span style="color: rgb(0, 58, 250);">
                <bdt class="question"><a href="https://www.procrastinix.com" target="_blank" data-custom-class="link">https://www.procrastinix.com</a></bdt>
              </span><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                        <bdt class="statement-end-if-in-editor">, or any website of ours that links to this Privacy Notice</bdt>
                      </span></span></span></span></span></span></span></span></li>
    </ul>
    <div>
      <bdt class="block-component"><span style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span></span></span></span></bdt>
      <div style="line-height: 1.5;">
        <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span></span></span></div>
        <ul>
          <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Engage with us in other related ways, including any sales, marketing, or events<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></li>
        </ul>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><strong>Questions or concerns?&nbsp;</strong>Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.<bdt class="block-component"></bdt> If you still have any questions or concerns, please contact us at <bdt class="question">support@procrastinix.com</bdt>.</span></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_1">SUMMARY OF KEY POINTS</span></span></strong></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our&nbsp;</em></strong></span></span><a data-custom-class="link" href="#toc"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text"><strong><em>table of contents</em></strong></span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><em>&nbsp;below to find the section you are looking for.</em></strong></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about&nbsp;</span></span><a data-custom-class="link" href="#personalinfo"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">personal information you disclose to us</span></span></a><span data-custom-class="body_text">.</span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we process any sensitive personal information?&nbsp;</strong>Some of the information may be considered <bdt class="block-component"></bdt>"special" or "sensitive"<bdt class="statement-end-if-in-editor"></bdt> in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. <bdt class="block-component"></bdt>We do not process sensitive personal information.<bdt class="else-block"></bdt></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong>
              <bdt class="block-component"></bdt>We do not collect any information from third parties.<bdt class="else-block"></bdt>
            </span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about&nbsp;</span></span><a data-custom-class="link" href="#infouse"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">how we process your information</span></span></a><span data-custom-class="body_text">.</span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>In what situations and with which <bdt class="block-component"></bdt>parties do we share personal information?</strong> We may share information in specific situations and with specific <bdt class="block-component"></bdt>third parties. Learn more about&nbsp;</span></span><a data-custom-class="link" href="#whoshare"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">when and with whom we share your personal information</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text">.<bdt class="block-component"></bdt></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have adequate <bdt class="block-component"></bdt>organizational<bdt class="statement-end-if-in-editor"></bdt> and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other <bdt class="block-component"></bdt>unauthorized<bdt class="statement-end-if-in-editor"></bdt> third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about&nbsp;</span></span><a data-custom-class="link" href="#infosafe"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">how we keep your information safe</span></span></a><span data-custom-class="body_text">.</span><span style="font-size: 15px;"><span data-custom-class="body_text">
              <bdt class="statement-end-if-in-editor"></bdt>
            </span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about&nbsp;</span></span><a data-custom-class="link" href="#privacyrights"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">your privacy rights</span></span></a><span data-custom-class="body_text">.</span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by <bdt class="block-component">submitting a&nbsp;</bdt></span></span><a data-custom-class="link" href="https://app.termly.io/notify/93691615-72c8-40e2-a362-e771b6f7c6ae" rel="noopener noreferrer" target="_blank"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">data subject access request</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text">
              <bdt class="block-component"></bdt>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
            </span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Want to learn more about what we do with any information we collect?&nbsp;</span></span><a data-custom-class="link" href="#toc"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">Review the Privacy Notice in full</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text">.</span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><br></div>
        <div id="toc" style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">TABLE OF CONTENTS</span></strong></span></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infocollect"><span style="color: rgb(0, 58, 250);">1. WHAT INFORMATION DO WE COLLECT?</span></a></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infouse"><span style="color: rgb(0, 58, 250);">2. HOW DO WE PROCESS YOUR INFORMATION?<bdt class="block-component"></bdt></span></a></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#legalbases"><span style="color: rgb(0, 58, 250);">3. <span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></span>
                <bdt class="statement-end-if-in-editor"></bdt>
              </span></a></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);"><a data-custom-class="link" href="#whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></span><span data-custom-class="body_text">
              <bdt class="block-component"></bdt><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);">
                      <bdt class="block-component"></bdt>
                    </span></span></span></span>
            </span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#cookies"><span style="color: rgb(0, 58, 250);">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);">
                    <bdt class="statement-end-if-in-editor"></bdt>
                  </span></span></span></span>
            <bdt class="block-component"></bdt>
          </span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);">
                        <bdt class="block-component"></bdt>
                      </span></span>
                    <bdt class="block-component"></bdt>
                  </span></span></span></span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#inforetain"><span style="color: rgb(0, 58, 250);">6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);">
                      <bdt class="block-component"></bdt>
                    </span></span></span></span></span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infosafe"><span style="color: rgb(0, 58, 250);">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);">
                    <bdt class="statement-end-if-in-editor"></bdt>
                    <bdt class="block-component"></bdt>
                  </span></span></span></span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);"><a data-custom-class="link" href="#privacyrights">8. WHAT ARE YOUR PRIVACY RIGHTS?</a></span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#DNT"><span style="color: rgb(0, 58, 250);">9. CONTROLS FOR DO-NOT-TRACK FEATURES<bdt class="block-component"></bdt></span></a></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#uslaws"><span style="color: rgb(0, 58, 250);">10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span>
          <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
        </div>
        <div style="line-height: 1.5;">
          <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
          <bdt class="block-component"></bdt>
        </div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#policyupdates"><span style="color: rgb(0, 58, 250);">11. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span></div>
        <div style="line-height: 1.5;"><a data-custom-class="link" href="#contact"><span style="color: rgb(0, 58, 250); font-size: 15px;">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div>
        <div style="line-height: 1.5;"><a data-custom-class="link" href="#request"><span style="color: rgb(0, 58, 250);">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><br></div>
        <div id="infocollect" style="line-height: 1.5;"><span style="color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0); font-size: 15px;"><span style="font-size: 15px; color: rgb(0, 0, 0);"><span style="font-size: 15px; color: rgb(0, 0, 0);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">1. WHAT INFORMATION DO WE COLLECT?</span></strong></span></span></span></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div id="personalinfo" style="line-height: 1.5;"><span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong>Personal information you disclose to us</strong></span></span></div>
        <div>
          <div><br></div>
          <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>&nbsp;</em></strong><em>We collect personal information that you provide to us.</em></span></span></span></span></span></span></div>
        </div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you <span style="font-size: 15px;">
                  <bdt class="block-component"></bdt>
                </span></span><span data-custom-class="body_text">express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;">
                  <bdt class="block-component"></bdt>
                </span></span></span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:<span style="font-size: 15px;"><span data-custom-class="body_text">
                    <bdt class="forloop-component"></bdt>
                  </span></span></span></span></span></div>
        <ul>
          <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">
                      <bdt class="question">email addresses</bdt>
                    </span></span></span></span></span></li>
        </ul>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">
                    <bdt class="forloop-component"></bdt>
                  </span></span></span></span></span></div>
        <ul>
          <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">
                      <bdt class="question">names</bdt>
                    </span></span></span></span></span></li>
        </ul>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">
                    <bdt class="forloop-component"></bdt>
                  </span><span data-custom-class="body_text">
                    <bdt class="statement-end-if-in-editor"></bdt>
                  </span></span></span></span></span></div>
        <div id="sensitiveinfo" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Sensitive Information.</strong>
              <bdt class="block-component"></bdt>We do not process sensitive information.
            </span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
              <bdt class="else-block"></bdt>
            </span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text">
                    <bdt class="block-component">
                      <bdt class="block-component"></bdt>
                    </bdt>
                  </span></span></span></span>
            <bdt class="block-component"></bdt>
          </span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="block-component"></bdt>
              </span></span></span></div>
        <div style="line-height: 1.5;"><span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong>Information automatically collected</strong></span></span></div>
        <div>
          <div><br></div>
          <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>&nbsp;</em></strong><em>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></span></span></span></span></span></span></div>
        </div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</span></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="block-component"></bdt>
              </span></span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Like many businesses, we also collect information through cookies and similar technologies. <bdt class="block-component"></bdt>You can find out more about this in our Cookie Notice: <bdt class="statement-end-if-in-editor"></bdt>
                <bdt class="block-component"></bdt><span style="color: rgb(0, 58, 250);">
                  <bdt class="question"><a href="https://www.procrastinix.com/cookies" target="_blank" data-custom-class="link">https://www.procrastinix.com/cookies</a></bdt>
                </span>.<bdt class="block-component"></bdt>
              </span></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                <bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
              </span><span data-custom-class="body_text">
                <bdt class="block-component"></bdt>
              </span></span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">The information we collect includes:<bdt class="block-component"></bdt></span></span></span></div>
        <ul>
          <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services<span style="font-size: 15px;">&nbsp;</span>(such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called <bdt class="block-component"></bdt>"crash dumps"<bdt class="statement-end-if-in-editor"></bdt>), and hardware settings).<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></li>
        </ul>
        <div style="line-height: 1.5;">
          <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
        </div>
        <ul>
          <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></li>
        </ul>
        <div style="line-height: 1.5;">
          <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
        </div>
        <ul>
          <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                            <bdt class="statement-end-if-in-editor"></bdt>
                          </span></span></span></span></span></span></span></span></li>
        </ul>
        <div>
          <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
          <bdt class="statement-end-if-in-editor"></bdt>
          <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
        </div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="heading_2">Google API</span></strong></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Our use of information received from Google APIs will adhere to&nbsp;</span></span><a data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener noreferrer" target="_blank"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">Google API Services User Data Policy</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text">, including the&nbsp;</span></span><a data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" rel="noopener noreferrer" target="_blank"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">Limited Use requirements</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text">.</span><br></span></div>
        <div><span style="font-size: 15px;"><br></span></div>
        <div style="line-height: 1.5;">
          <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                        <bdt class="statement-end-if-in-editor">
                          <bdt class="block-component"></bdt>
                        </bdt>
                      </span></span></span></span></span></span></span><span style="font-size: 15px;"><span data-custom-class="body_text">
              <bdt class="block-component"></bdt>
            </span></span>
        </div>
        <div style="line-height: 1.5;"><br></div>
        <div id="infouse" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">2. HOW DO WE PROCESS YOUR INFORMATION?</span></strong></span></span></span></span></span></div>
        <div>
          <div style="line-height: 1.5;"><br></div>
          <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></span></span></span></span></span></span></div>
        </div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
                <bdt class="block-component"></bdt>
              </span></span></span>
          <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                  <bdt class="block-component"></bdt>
                </span></span></span>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span></div>
            <ul>
              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To deliver and facilitate delivery of services to the user.&nbsp;</strong>We may process your information to provide you with the requested service.<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                          <bdt class="statement-end-if-in-editor"></bdt>
                                                        </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li>
            </ul>
            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                    <bdt class="block-component"></bdt>
                  </span></span></span>
              <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                      <bdt class="block-component"></bdt>
                    </span></span></span></div>
              <ul>
                <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To respond to user inquiries/offer support to users.&nbsp;</strong>We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.<bdt class="statement-end-if-in-editor"></bdt></span></span></span></li>
              </ul>
              <div style="line-height: 1.5;">
                <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                <div style="line-height: 1.5;">
                  <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                </div>
                <ul>
                  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To send administrative information to you.&nbsp;</strong>We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                      <bdt class="statement-end-if-in-editor"></bdt>
                                    </span></span></span></span></span></span></span></span></span></li>
                </ul>
                <div style="line-height: 1.5;">
                  <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                  <div style="line-height: 1.5;">
                    <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                  </div>
                  <ul>
                    <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>To <bdt class="block-component"></bdt>fulfill<bdt class="statement-end-if-in-editor"></bdt> and manage your orders.</strong> We may process your information to <bdt class="block-component"></bdt>fulfill<bdt class="statement-end-if-in-editor"></bdt> and manage your orders, payments, returns, and exchanges made through the Services.</span></span>
                      <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                    </li>
                  </ul>
                  <p style="font-size: 15px; line-height: 1.5;">
                    <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                  </p>
                  <p style="font-size: 15px; line-height: 1.5;">
                    <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                  </p>
                  <ul>
                    <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To enable user-to-user communications.&nbsp;</strong>We may process your information if you choose to use any of our offerings that allow for communication with another user.<span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                            <bdt class="statement-end-if-in-editor"></bdt>
                                          </span></span></span></span></span></span></span></span></span></span></span></li>
                  </ul>
                  <p style="font-size: 15px; line-height: 1.5;">
                    <bdt class="block-component"></bdt>
                  </p>
                  <p style="font-size: 15px; line-height: 1.5;">
                    <bdt class="block-component"></bdt>
                  </p>
                  <div style="line-height: 1.5;">
                    <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                    <div style="line-height: 1.5;">
                      <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                      <div style="line-height: 1.5;">
                        <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                        <div style="line-height: 1.5;"><span style="font-size: 15px;">
                            <bdt class="block-component"><span data-custom-class="body_text"></span></bdt>
                          </span>
                          <div style="line-height: 1.5;">
                            <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                            <div style="line-height: 1.5;">
                              <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                              <div style="line-height: 1.5;">
                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                <div style="line-height: 1.5;">
                                  <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                  <div style="line-height: 1.5;">
                                    <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                    <div style="line-height: 1.5;">
                                      <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                      <div style="line-height: 1.5;">
                                        <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                        <div style="line-height: 1.5;">
                                          <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                          <div style="line-height: 1.5;">
                                            <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                            <div style="line-height: 1.5;">
                                              <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              </div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</span></span>
                                                  <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                </li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              </div>
                                              <div style="line-height: 1.5;"><br></div>
                                              <div id="legalbases" style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_1">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</span></span></strong></div>
                                              <div style="line-height: 1.5;"><br></div>
                                              <div style="line-height: 1.5;"><em><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>In Short:&nbsp;</strong>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e.<bdt class="block-component"></bdt>,<bdt class="statement-end-if-in-editor"></bdt> legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or <bdt class="block-component"></bdt>fulfill<bdt class="statement-end-if-in-editor"></bdt> our contractual obligations, to protect your rights, or to <bdt class="block-component"></bdt>fulfill<bdt class="statement-end-if-in-editor"></bdt> our legitimate business interests.</span></span></em></div>
                                              <div style="line-height: 1.5;"><br></div>
                                              <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                    <bdt class="block-component"></bdt>
                                                  </span><span data-custom-class="body_text">
                                                    <bdt class="block-component"></bdt>
                                                  </span></span></div>
                                              <div style="line-height: 1.5;"><em><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><u>If you are located in the EU or UK, this section applies to you.</u></strong></span></span></em></div>
                                              <div style="line-height: 1.5;"><br></div>
                                              <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                    <bdt class="statement-end-if-in-editor"></bdt>
                                                  </span></span></div>
                                              <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</span></span></div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Consent.&nbsp;</strong>We may process your information if you have given us permission (i.e.<bdt class="block-component"></bdt>,<bdt class="statement-end-if-in-editor"></bdt> consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about&nbsp;</span></span><a data-custom-class="link" href="#withdrawconsent"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">withdrawing your consent</span></span></a><span data-custom-class="body_text">.</span></li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              </div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to <bdt class="block-component"></bdt>fulfill<bdt class="statement-end-if-in-editor"></bdt> our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</span></span>
                                                  <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                </li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              </div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.<bdt class="statement-end-if-in-editor"></bdt><br></span></span></li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              </div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</span></span>
                                                  <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                </li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><span data-custom-class="body_text"><span style="font-size: 15px;">
                                                    <bdt class="block-component">
                                                      <bdt class="block-component"></bdt>
                                                    </bdt>
                                                  </span></span>
                                              </div>
                                              <div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;"><strong><u><em>If you are located in Canada, this section applies to you.</em></u></strong></span></span></div>
                                              <div style="line-height: 1.5;"><br></div>
                                              <div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">
                                                    <bdt class="statement-end-if-in-editor"></bdt>
                                                  </span></span></div>
                                              <div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">We may process your information if you have given us specific permission (i.e.<bdt class="block-component"></bdt>,<bdt class="statement-end-if-in-editor"></bdt> express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e.<bdt class="block-component"></bdt>,<bdt class="statement-end-if-in-editor"></bdt> implied consent). You can&nbsp;</span></span><a data-custom-class="link" href="#withdrawconsent"><span data-custom-class="body_text"><span style="color: rgb(0, 58, 250); font-size: 15px;">withdraw your consent</span></span></a><span data-custom-class="body_text"><span style="font-size: 15px;">&nbsp;at any time.</span></span></div>
                                              <div style="line-height: 1.5;"><br></div>
                                              <div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</span></span></div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</span></span></li>
                                              </ul>
                                              <div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">
                                                    <bdt class="block-component"></bdt>
                                                  </span></span></div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">For investigations and fraud detection and prevention<bdt class="statement-end-if-in-editor"></bdt></span></span></li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              </div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">For business transactions provided certain conditions are met</span></span>
                                                  <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                </li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              </div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</span></span>
                                                  <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                </li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              </div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">For identifying injured, ill, or deceased persons and communicating with next of kin</span></span>
                                                  <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                </li>
                                              </ul>
                                              <div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">
                                                    <bdt class="block-component"></bdt>
                                                  </span></span></div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse<bdt class="statement-end-if-in-editor"></bdt></span></span></li>
                                              </ul>
                                              <div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">
                                                    <bdt class="block-component"></bdt>
                                                  </span></span></div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province<bdt class="statement-end-if-in-editor"></bdt></span></span></li>
                                              </ul>
                                              <div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">
                                                    <bdt class="block-component"></bdt>
                                                  </span></span></div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records<bdt class="statement-end-if-in-editor"></bdt></span></span></li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              </div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced<bdt class="statement-end-if-in-editor"></bdt></span></span></li>
                                              </ul>
                                              <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                    <bdt class="block-component"></bdt>
                                                  </span></span></div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">If the collection is solely for journalistic, artistic, or literary purposes<bdt class="statement-end-if-in-editor"></bdt></span></span></li>
                                              </ul>
                                              <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                    <bdt class="block-component"></bdt>
                                                  </span></span></div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">If the information is publicly available and is specified by the regulations</span>
                                                    <bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
                                                  </span></li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                              </div>
                                              <div style="line-height: 1.5;"><br></div>
                                              <div id="whoshare" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></strong></span></span></span></span></span></div>
                                              <div style="line-height: 1.5;"><br></div>
                                              <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em>&nbsp;We may share information in specific situations described in this section and/or with the following <bdt class="block-component"></bdt>third parties.</em></span></span></span></div>
                                              <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                      <bdt class="block-component"></bdt>
                                                    </span></span></span></div>
                                              <div style="line-height: 1.5;"><br></div>
                                              <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We <bdt class="block-component"></bdt>may need to share your personal information in the following situations:</span></span></div>
                                              <ul>
                                                <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></span></li>
                                              </ul>
                                              <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                    <bdt class="block-component"></bdt>
                                                  </span></span>
                                                <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                    <bdt class="block-component"><span data-custom-class="body_text"></span></bdt>
                                                  </span>
                                                  <div style="line-height: 1.5;">
                                                    <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                    <div style="line-height: 1.5;">
                                                      <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                      <div style="line-height: 1.5;">
                                                        <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                        <div style="line-height: 1.5;">
                                                          <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                                                                    <bdt class="block-component"><span data-custom-class="heading_1">
                                                                        <bdt class="block-component"></bdt>
                                                                      </span></bdt>
                                                                  </span></span></span></span></span>
                                                        </div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div id="cookies" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></strong></span></span></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em>&nbsp;We may use cookies and other tracking technologies to collect and store your information.</em></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services<bdt class="block-component"></bdt>, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</span></span></span>
                                                          <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                        </div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">To the extent these online tracking technologies are deemed to be a <bdt class="block-component"></bdt>"sale"/"sharing"<bdt class="statement-end-if-in-editor"></bdt> (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt></span></span><span data-custom-class="body_text"><a data-custom-class="link" href="#uslaws"><span style="color: rgb(0, 58, 250); font-size: 15px;">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                              <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt>
                                                            </span>
                                                            <bdt class="statement-end-if-in-editor"></bdt>
                                                          </span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                                                    <bdt class="block-component"></bdt>
                                                                  </span></span>: <span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">
                                                                    <bdt class="question"><a href="https://www.procrastinix.com/cookies" target="_blank" data-custom-class="link">https://www.procrastinix.com/cookies</a></bdt>
                                                                  </span></span><span style="font-size: 15px; color: rgb(89, 89, 89);">
                                                                  <bdt class="block-component"></bdt>.
                                                                </span></span></span></span>
                                                          <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                        </div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="heading_2">Google Analytics</span></strong></span></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We may share your information with Google Analytics to track and <bdt class="block-component"></bdt>analyze<bdt class="statement-end-if-in-editor"></bdt> the use of the Services.<bdt class="block-component"></bdt> The Google Analytics Advertising Features that we may use include: <bdt class="forloop-component"></bdt>
                                                              <bdt class="block-component"></bdt>
                                                              <bdt class="question">Google Analytics Demographics and Interests Reporting</bdt>
                                                              <bdt class="block-component"></bdt>
                                                              <bdt class="forloop-component"></bdt>.<bdt class="statement-end-if-in-editor"></bdt> To opt out of being tracked by Google Analytics across the Services, visit <span style="color: rgb(0, 58, 250);"><a data-custom-class="link" href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">https://tools.google.com/dlpage/gaoptout</a>.</span>
                                                              <bdt class="block-component"></bdt> You can opt out of Google Analytics Advertising Features through <span style="color: rgb(0, 58, 250);"><a data-custom-class="link" href="https://adssettings.google.com/" rel="noopener noreferrer" target="_blank">Ads Settings</a></span> and Ad Settings for mobile apps. Other opt out means include <span style="color: rgb(0, 58, 250);"><span style="color: rbg(0, 58, 250);"><a data-custom-class="link" href="http://optout.networkadvertising.org/" rel="noopener noreferrer" target="_blank">http://optout.networkadvertising.org/</a></span></span> and <span style="color: rgb(0, 58, 250);"><a data-custom-class="link" href="http://www.networkadvertising.org/mobile-choice" rel="noopener noreferrer" target="_blank">http://www.networkadvertising.org/mobile-choice</a></span>.<bdt class="statement-end-if-in-editor"></bdt> For more information on the privacy practices of Google, please visit the <span style="color: rgb(0, 58, 250);"><a data-custom-class="link" href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy &amp; Terms page</a></span>.
                                                            </span></span>
                                                          <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                              <bdt class="statement-end-if-in-editor"></bdt>
                                                                            </span></span></span></span></span></span></span></span></span></span><span style="font-size: 15px;">
                                                            <bdt class="block-component"></bdt>
                                                          </span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                                <bdt class="block-component"></bdt>
                                                                              </span>
                                                                              <bdt class="block-component"><span data-custom-class="body_text">
                                                                                  <bdt class="block-component"></bdt>
                                                                                </span></bdt>
                                                                            </span></span></span></span></span></span></span></span></span></span>
                                                        </div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div id="inforetain" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">6. HOW LONG DO WE KEEP YOUR INFORMATION?</span></strong></span></span></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>We keep your information for as long as necessary to <bdt class="block-component"></bdt>fulfill<bdt class="statement-end-if-in-editor"></bdt> the purposes outlined in this Privacy Notice unless otherwise required by law.</em></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).<bdt class="block-component"></bdt></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or <bdt class="block-component"></bdt>anonymize<bdt class="statement-end-if-in-editor"></bdt> such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.<span style="color: rgb(89, 89, 89);">
                                                                  <bdt class="block-component"></bdt>
                                                                </span></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div id="infosafe" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></strong></span></span></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>We aim to protect your personal information through a system of <bdt class="block-component"></bdt>organizational<bdt class="statement-end-if-in-editor"></bdt> and technical security measures.</em></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have implemented appropriate and reasonable technical and <bdt class="block-component"></bdt>organizational<bdt class="statement-end-if-in-editor"></bdt> security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other <bdt class="block-component"></bdt>unauthorized<bdt class="statement-end-if-in-editor"></bdt> third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.<span style="color: rgb(89, 89, 89);">
                                                                  <bdt class="statement-end-if-in-editor"></bdt>
                                                                </span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                                                    <bdt class="block-component"></bdt>
                                                                  </span></span></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div id="privacyrights" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">8. WHAT ARE YOUR PRIVACY RIGHTS?</span></strong></span></span></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em>&nbsp;<span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><em>
                                                                          <bdt class="block-component"></bdt>
                                                                        </em></span></span></span>
                                                                  <bdt class="block-component"></bdt>Depending on your state of residence in the US or in <bdt class="else-block"></bdt>some regions, such as <bdt class="block-component"></bdt>the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada<bdt class="block-component"></bdt>, you have rights that allow you greater access to and control over your personal information.<span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text"><em>
                                                                          <bdt class="statement-end-if-in-editor"></bdt>
                                                                        </em></span></span>&nbsp;</span>You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
                                                                </em><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                                                                    <bdt class="block-component"></bdt>
                                                                  </span></span></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">In some regions (like <bdt class="block-component"></bdt>the EEA, UK, Switzerland, and Canada<bdt class="block-component"></bdt>), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt></span></span></span><a data-custom-class="link" href="#contact"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt> below.
                                                              </span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will consider and act upon any request in accordance with applicable data protection laws.<bdt class="block-component"></bdt></span></span></span></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">&nbsp;</span></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><a data-custom-class="link" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank"><span style="font-size: 15px;">Member State data protection authority</span></a></span></span></span></span></span> or&nbsp;</span></span></span><a data-custom-class="link" href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" rel="noopener noreferrer" target="_blank"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span data-custom-class="body_text">UK data protection authority</span></span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">.</span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you are located in Switzerland, you may contact the <span style="font-size: 15px;"><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><span style="color: rgb(0, 58, 250); font-size: 15px;"><a data-custom-class="link" href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">Federal Data Protection and Information Commissioner</a></span></span></span></span></span></span>.</span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div id="withdrawconsent" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information,<bdt class="block-component"></bdt> which may be express and/or implied consent depending on the applicable law,<bdt class="statement-end-if-in-editor"></bdt> you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt></span></span></span><a data-custom-class="link" href="#contact"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt> below<bdt class="block-component"></bdt>.
                                                              </span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor,<bdt class="block-component"></bdt> when applicable law allows,<bdt class="statement-end-if-in-editor"></bdt> will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.<bdt class="block-component"></bdt></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><u>Opting out of marketing and promotional communications:</u></strong><strong>&nbsp;</strong>You can unsubscribe from our marketing and promotional communications at any time by<bdt class="block-component"></bdt> clicking on the unsubscribe link in the emails that we send,<bdt class="statement-end-if-in-editor"></bdt>
                                                              <bdt class="block-component"></bdt>
                                                              <bdt class="block-component"></bdt> or by contacting us using the details provided in the section <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt>
                                                            </span></span><a data-custom-class="link" href="#contact"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                              <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt> below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                                                            </span><span data-custom-class="body_text">
                                                              <bdt class="statement-end-if-in-editor"></bdt>
                                                            </span></span>
                                                          <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                                                                              <bdt class="block-component"></bdt>
                                                                            </span></span></span></span></span></span></span></span></span></span>
                                                        </div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. <bdt class="block-component"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>
                                                                      </span></span></span>For further information, please see our Cookie Notice: <span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(0, 58, 250);">
                                                                          <bdt class="question"><a href="https://www.procrastinix.com/cookies" target="_blank" data-custom-class="link">https://www.procrastinix.com/cookies</a></bdt>
                                                                        </span>.<bdt class="block-component"></bdt><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);">
                                                                                    <bdt class="statement-end-if-in-editor"></bdt>
                                                                                  </span></span></span></span></span></span></span></span></span></bdt></span></span></span>
                                                          <bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                        </div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">If you have questions or comments about your privacy rights, you may email us at <bdt class="question">support@procrastinix.com</bdt>.</span></span>
                                                          <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></span></bdt>
                                                        </div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div id="DNT" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">9. CONTROLS FOR DO-NOT-TRACK FEATURES</span></strong></span></span></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (<bdt class="block-component"></bdt>"DNT"<bdt class="statement-end-if-in-editor"></bdt>) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for <bdt class="block-component"></bdt>recognizing<bdt class="statement-end-if-in-editor"></bdt> and implementing DNT signals has been <bdt class="block-component"></bdt>finalized<bdt class="statement-end-if-in-editor"></bdt>. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</span></span></span>
                                                          <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                        </div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for <bdt class="block-component"></bdt>recognizing<bdt class="statement-end-if-in-editor"></bdt> or <bdt class="block-component"></bdt>honoring<bdt class="statement-end-if-in-editor"></bdt> DNT signals, we do not respond to them at this time.</span></span>
                                                          <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt>
                                                        </div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                <bdt class="block-component"></bdt>
                                                              </span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div id="uslaws" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></strong></span></span></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>If you are a resident of<bdt class="block-component"></bdt> California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia<bdt class="else-block"></bdt>, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</em></span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong><span data-custom-class="heading_2">Categories of Personal Information We Collect</span></strong></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have collected the following categories of personal information in the past twelve (12) months:</span></span></span></div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <table style="width: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Category</strong></span></span></span></td>
                                                              <td style="width: 51.4385%; border-top: 1px solid black; border-right: 1px solid black;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Examples</strong></span></span></span></td>
                                                              <td style="width: 14.9084%; border-right: 1px solid black; border-top: 1px solid black; text-align: center;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Collected</strong></span></span></span></td>
                                                            </tr>
                                                            <tr>
                                                              <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">A. Identifiers</span></span></span></div>
                                                              </td>
                                                              <td style="width: 51.4385%; border-top: 1px solid black; border-right: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</span></span></span></div>
                                                              </td>
                                                              <td style="width: 14.9084%; text-align: center; vertical-align: middle; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component">
                                                                          <bdt class="block-component"></bdt>
                                                                        </bdt>YES<bdt class="else-block">
                                                                          <bdt class="block-component"></bdt>
                                                                        </bdt>
                                                                      </span></span></span></div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <div style="line-height: 1.5;">
                                                          <bdt class="block-component"></bdt>
                                                        </div>
                                                        <table style="width: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">B. Personal information as defined in the California Customer Records statute</span></span></span></div>
                                                              </td>
                                                              <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Name, contact information, education, employment, employment history, and financial information</span></span></span></div>
                                                              </td>
                                                              <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="forloop-component">
                                                                          <bdt class="block-component">
                                                                            <bdt class="block-component">NO<bdt class="statement-end-if-in-editor">
                                                                                <bdt class="block-component"></bdt>
                                                                              </bdt>
                                                                            </bdt>
                                                                          </bdt>
                                                                        </bdt>
                                                                      </span></span></span></div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <div style="line-height: 1.5;">
                                                          <bdt class="block-component"></bdt>
                                                        </div>
                                                        <table style="width: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>C<bdt class="else-block"></bdt>. Protected classification characteristics under state or federal law
                                                                      </span></span></span></div>
                                                              </td>
                                                              <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</span></span></span></div>
                                                              </td>
                                                              <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div data-custom-class="body_text" style="line-height: 1.5;">
                                                                  <bdt class="forloop-component"><span data-custom-class="body_text">
                                                                      <bdt class="block-component"></bdt>
                                                                      <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                                                                      <bdt class="block-component"></bdt>
                                                                    </span></bdt>
                                                                </div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>D<bdt class="else-block"></bdt>. Commercial information
                                                                      </span></span></span></div>
                                                              </td>
                                                              <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Transaction information, purchase history, financial details, and payment information</span></span></span></div>
                                                              </td>
                                                              <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div data-custom-class="body_text" style="line-height: 1.5;">
                                                                  <bdt class="forloop-component"><span data-custom-class="body_text">
                                                                      <bdt class="block-component"></bdt>
                                                                      <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor">
                                                                        <bdt class="block-component"></bdt>
                                                                      </bdt>
                                                                    </span></bdt>
                                                                </div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>E<bdt class="else-block"></bdt>. Biometric information
                                                                      </span></span></span></div>
                                                              </td>
                                                              <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Fingerprints and voiceprints</span></span></span></div>
                                                              </td>
                                                              <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div data-custom-class="body_text" style="line-height: 1.5;">
                                                                  <bdt class="forloop-component"><span data-custom-class="body_text">
                                                                      <bdt class="block-component">
                                                                        <bdt class="block-component">NO</bdt>
                                                                        <bdt class="statement-end-if-in-editor"></bdt>
                                                                        <bdt class="block-component"></bdt>
                                                                      </bdt>
                                                                    </span></bdt>
                                                                </div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>F<bdt class="else-block"></bdt>. Internet or other similar network activity
                                                                      </span></span></span></div>
                                                              </td>
                                                              <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Browsing history, search history, online <bdt class="block-component"></bdt>behavior<bdt class="statement-end-if-in-editor"></bdt>, interest data, and interactions with our and other websites, applications, systems, and advertisements</span></span></span></div>
                                                              </td>
                                                              <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div data-custom-class="body_text" style="line-height: 1.5;">
                                                                  <bdt class="forloop-component"><span data-custom-class="body_text">
                                                                      <bdt class="block-component"></bdt>
                                                                      <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                                                                      <bdt class="block-component"></bdt>
                                                                    </span></bdt>
                                                                </div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>G<bdt class="else-block"></bdt>. Geolocation data
                                                                      </span></span></span></div>
                                                              </td>
                                                              <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Device location</span></span></span></div>
                                                              </td>
                                                              <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div data-custom-class="body_text" style="line-height: 1.5;">
                                                                  <bdt class="forloop-component"><span data-custom-class="body_text">
                                                                      <bdt class="block-component"></bdt>
                                                                      <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                                                                      <bdt class="block-component"></bdt>
                                                                    </span></bdt>
                                                                </div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>H<bdt class="else-block"></bdt>. Audio, electronic, sensory, or similar information
                                                                      </span></span></span></div>
                                                              </td>
                                                              <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Images and audio, video or call recordings created in connection with our business activities</span></span></span></div>
                                                              </td>
                                                              <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div data-custom-class="body_text" style="line-height: 1.5;">
                                                                  <bdt class="forloop-component"><span data-custom-class="body_text">
                                                                      <bdt class="block-component"></bdt>
                                                                      <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                                                                      <bdt class="block-component"></bdt>
                                                                    </span></bdt>
                                                                </div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td style="width: 33.8274%; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>I<bdt class="else-block"></bdt>. Professional or employment-related information
                                                                      </span></span></span></div>
                                                              </td>
                                                              <td style="width: 51.4385%; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</span></span></span></div>
                                                              </td>
                                                              <td style="width: 14.9084%; text-align: center; border-right: 1px solid black; border-top: 1px solid black;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div data-custom-class="body_text" style="line-height: 1.5;">
                                                                  <bdt class="forloop-component"><span data-custom-class="body_text">
                                                                      <bdt class="block-component"></bdt>
                                                                      <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                                                                      <bdt class="block-component"></bdt>
                                                                    </span></bdt>
                                                                </div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td style="border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black; width: 33.8274%;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>J<bdt class="else-block"></bdt>. Education Information
                                                                      </span></span></span></div>
                                                              </td>
                                                              <td style="border-right: 1px solid black; border-top: 1px solid black; width: 51.4385%;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Student records and directory information</span></span></span></div>
                                                              </td>
                                                              <td style="text-align: center; border-right: 1px solid black; border-top: 1px solid black; width: 14.9084%;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div data-custom-class="body_text" style="line-height: 1.5;">
                                                                  <bdt class="forloop-component"><span data-custom-class="body_text">
                                                                      <bdt class="block-component"></bdt>
                                                                      <bdt class="block-component"></bdt>NO<bdt class="statement-end-if-in-editor"></bdt>
                                                                      <bdt class="block-component"></bdt>
                                                                    </span></bdt>
                                                                </div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td style="border-width: 1px; border-color: black; border-style: solid; width: 33.8274%;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>K<bdt class="else-block"></bdt>. Inferences drawn from collected personal information
                                                                      </span></span></span></div>
                                                              </td>
                                                              <td style="border-bottom: 1px solid black; border-top: 1px solid black; border-right: 1px solid black; width: 51.4385%;">
                                                                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</span></span></span></div>
                                                              </td>
                                                              <td style="text-align: center; border-right: 1px solid black; border-bottom: 1px solid black; border-top: 1px solid black; width: 14.9084%;">
                                                                <div style="line-height: 1.5;"><br></div>
                                                                <div data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text">
                                                                    <bdt class="block-component"></bdt>NO<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                              <bdt class="statement-end-if-in-editor"></bdt>
                                                                            </span></span></span></span></span>
                                                                  </span></div>
                                                                <div style="line-height: 1.5;"><br></div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td style="border-left: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black; line-height: 1.5;"><span data-custom-class="body_text">
                                                                  <bdt class="block-component"></bdt>L<bdt class="else-block"></bdt>. Sensitive personal Information
                                                                </span></td>
                                                              <td style="border-right: 1px solid black; border-bottom: 1px solid black; line-height: 1.5;">
                                                                <bdt class="block-component"><span data-custom-class="body_text"></span></bdt>
                                                              </td>
                                                              <td style="border-right: 1px solid black; border-bottom: 1px solid black;">
                                                                <div data-empty="true" style="text-align: center;"><br></div>
                                                                <div data-custom-class="body_text" data-empty="true" style="text-align: center; line-height: 1.5;">
                                                                  <bdt class="block-component"><span data-custom-class="body_text"></span></bdt>NO<bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
                                                                </div>
                                                                <div data-empty="true" style="text-align: center;"><br></div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <div style="line-height: 1.5;">
                                                          <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                        </div>
                                                        <div style="line-height: 1.5;"><br></div>
                                                        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</span>
                                                            <bdt class="block-component"></bdt>
                                                          </span></div>
                                                        <ul>
                                                          <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Receiving help through our customer support channels;<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                        </ul>
                                                        <div><span style="font-size: 15px;">
                                                            <bdt class="block-component"></bdt>
                                                          </span></div>
                                                        <ul>
                                                          <li data-custom-class="body_text"><span style="font-size: 15px;">Participation in customer surveys or contests; and<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                        </ul>
                                                        <div><span style="font-size: 15px;">
                                                            <bdt class="block-component"></bdt>
                                                          </span></div>
                                                        <ul>
                                                          <li data-custom-class="body_text"><span style="font-size: 15px;">Facilitation in the delivery of our Services and to respond to your inquiries.</span>
                                                            <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt>
                                                          </li>
                                                        </ul>
                                                        <div style="line-height: 1.5;">
                                                          <bdt class="block-component"><span data-custom-class="body_text"></span></bdt><span data-custom-class="body_text">We will use and retain the collected personal information as needed to provide the Services or for:<bdt class="block-component"></bdt></span>
                                                        </div>
                                                        <ul>
                                                          <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text">Category A - <bdt class="question">As long as the user has an account with us</bdt>
                                                              <bdt class="statement-end-if-in-editor"></bdt>
                                                            </span></li>
                                                        </ul>
                                                        <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                            <bdt class="block-component">
                                                              <bdt class="block-component"></bdt>
                                                            </bdt>
                                                          </span>
                                                          <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                              <bdt class="block-component"></bdt>
                                                            </span>
                                                            <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                                <bdt class="block-component"></bdt>
                                                              </span>
                                                              <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                                  <bdt class="block-component"></bdt>
                                                                </span>
                                                                <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                                    <bdt class="block-component"></bdt>
                                                                  </span>
                                                                  <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                                      <bdt class="block-component"></bdt>
                                                                    </span>
                                                                    <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>
                                                                      </span></div>
                                                                    <ul>
                                                                      <li data-custom-class="body_text" style="line-height: 1.5;"><span data-custom-class="body_text">Category <bdt class="block-component"></bdt>H<bdt class="else-block"></bdt> - <bdt class="question">As long as the user has an account with us</bdt>
                                                                          <bdt class="statement-end-if-in-editor"></bdt>
                                                                        </span></li>
                                                                    </ul>
                                                                    <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                                        <bdt class="block-component"></bdt>
                                                                      </span>
                                                                      <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                                          <bdt class="block-component"></bdt>
                                                                        </span>
                                                                        <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                                            <bdt class="block-component"></bdt>
                                                                          </span>
                                                                          <div style="line-height: 1.5;"><span data-custom-class="body_text">
                                                                              <bdt class="block-component"></bdt>
                                                                            </span>
                                                                            <bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
                                                                            <div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_2">Sources of Personal Information</span></span></strong></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Learn more about the sources of personal information we collect in <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt></span></span><span data-custom-class="body_text"><a data-custom-class="link" href="#infocollect"><span style="color: rgb (0, 58, 250); font-size: 15px;">WHAT INFORMATION DO WE COLLECT?</span></a></span><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                                                  <bdt class="block-component"></bdt>"
                                                                                </span>
                                                                                <bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
                                                                              </span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong><span data-custom-class="heading_2">How We Use and Share Personal Information</span></strong></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span data-custom-class="body_text" style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>Learn more about how we use your personal information in the section, <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt>
                                                                              </span><a data-custom-class="link" href="#infouse"><span style="color: rgb(0, 58, 250); font-size: 15px;">HOW DO WE PROCESS YOUR INFORMATION?</span></a><span data-custom-class="body_text" style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>"
                                                                              </span>
                                                                              <bdt class="statement-end-if-in-editor"><span data-custom-class="body_text" style="font-size: 15px;"></span></bdt>
                                                                            </div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                                                                        <bdt class="block-component"></bdt>
                                                                                      </span></span></span></span></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Will your information be shared with anyone else?</strong></span></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt></span></span></span><a data-custom-class="link" href="#whoshare"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span style="font-size: 15px; color: rgb(0, 58, 250);">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                                    <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt>
                                                                                  </span></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be <bdt class="block-component"></bdt>"selling"<bdt class="statement-end-if-in-editor"></bdt> of your personal information.<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                                                                        <bdt class="block-component"></bdt>
                                                                                      </span></span></span></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We<span style="color: rgb(89, 89, 89);">&nbsp;</span>will not sell or share personal information in the future belonging to website visitors, users, and other consumers.<span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                                                <bdt class="statement-end-if-in-editor"></bdt>
                                                                                              </span></span></span></span>
                                                                                        <bdt class="block-component"></bdt>
                                                                                      </span></span></span></span></span><span data-custom-class="body_text"><span style="color: rgb(0, 0, 0);"><span data-custom-class="body_text">
                                                                                    <bdt class="block-component"></bdt>
                                                                                  </span></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="heading_2">Your Rights</span></strong></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</span>
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to know</strong> whether or not we are processing your personal data<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to access&nbsp;</strong>your personal data<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to correct&nbsp;</strong>inaccuracies in your personal data<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to request</strong> the deletion of your personal data<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to obtain a copy&nbsp;</strong>of the personal data you previously shared with us<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to non-discrimination</strong> for exercising your rights<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising<bdt class="block-component"></bdt> (or sharing as defined under California’s privacy law)<bdt class="statement-end-if-in-editor"></bdt>, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (<bdt class="block-component"></bdt>"profiling"<bdt class="statement-end-if-in-editor"></bdt>)<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Depending upon the state where you live, you may also have the following rights:</span>
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to access the categories of personal data being processed (as permitted by applicable law, including Minnesota’s privacy law)<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including<bdt class="block-component"></bdt> California's and Delaware's<bdt class="else-block"></bdt> privacy law)<bdt class="statement-end-if-in-editor"></bdt></span></li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;">
                                                                              <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                                            </div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including<bdt class="block-component"></bdt> Minnesota's and Oregon's<bdt class="else-block"></bdt> privacy law)</span>
                                                                                <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt>
                                                                              </li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                                                <bdt class="block-component"></bdt>
                                                                              </span></div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to review, understand, question, and correct how personal data has been profiled (as permitted by applicable law, including Minnesota’s privacy law)</span><span style="font-size: 15px;">
                                                                                  <bdt class="statement-end-if-in-editor"></bdt>
                                                                                </span></li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;">
                                                                              <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                                            </div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including California’s privacy law)</span>
                                                                                <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt>
                                                                              </li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;">
                                                                              <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                                            </div>
                                                                            <ul>
                                                                              <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including Florida’s privacy law)</span>
                                                                                <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt>
                                                                              </li>
                                                                            </ul>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;">
                                                                                <bdt class="statement-end-if-in-editor"></bdt>
                                                                              </span></div>
                                                                            <div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_2">How to Exercise Your Rights</span></span></strong></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">To exercise these rights, you can contact us <bdt class="block-component"></bdt>by submitting a&nbsp;</span></span></span><a data-custom-class="link" href="https://app.termly.io/notify/93691615-72c8-40e2-a362-e771b6f7c6ae" rel="noopener noreferrer" target="_blank"><span style="font-size: 15px; color: rgb(0, 58, 250);"><span style="font-size: 15px; color: rgb(0, 58, 250);">data subject access request</span></span></a><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">, <bdt class="block-component"></bdt></span><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                                                                          <bdt class="block-component"></bdt>by emailing us at <bdt class="question">support@procrastinix.com</bdt>, <bdt class="statement-end-if-in-editor"></bdt>
                                                                                          <bdt class="block-component"></bdt>
                                                                                        </span><span data-custom-class="body_text">
                                                                                          <bdt class="block-component"></bdt>
                                                                                          <bdt class="block-component"><span data-custom-class="body_text">
                                                                                              <bdt class="block-component"></bdt>
                                                                                            </span></bdt>
                                                                                        </span></span></span></span></span></span><span data-custom-class="body_text">or by referring to the contact details at the bottom of this document.</span>
                                                                              <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                                              <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                                            </div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Under certain US state data protection laws, you can designate an <bdt class="block-component"></bdt>authorized<bdt class="statement-end-if-in-editor"></bdt> agent to make a request on your behalf. We may deny a request from an <bdt class="block-component"></bdt>authorized<bdt class="statement-end-if-in-editor"></bdt> agent that does not submit proof that they have been validly <bdt class="block-component"></bdt>authorized<bdt class="statement-end-if-in-editor"></bdt> to act on your behalf in accordance with applicable laws.</span><br></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="heading_2">Request Verification</span></strong></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</span></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">If you submit the request through an <bdt class="block-component"></bdt>authorized<bdt class="statement-end-if-in-editor"></bdt> agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</span></span>
                                                                              <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                                            </div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="heading_2"><strong>Appeals</strong></span></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <bdt class="block-component"></bdt>
                                                                                  <bdt class="question">__________</bdt>
                                                                                  <bdt class="statement-end-if-in-editor"></bdt>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                                                                                </span>
                                                                                <bdt class="statement-end-if-in-editor"></bdt>
                                                                              </span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                                                                      <bdt class="block-component">
                                                                                        <bdt class="block-component"></bdt>
                                                                                      </bdt>
                                                                                    </span></span></span></span>
                                                                              <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                                            </div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="heading_2">California <bdt class="block-component"></bdt>"Shine The Light"<bdt class="statement-end-if-in-editor"></bdt> Law</span></strong></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><br></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">California Civil Code Section 1798.83, also known as the <bdt class="block-component"></bdt>"Shine The Light"<bdt class="statement-end-if-in-editor"></bdt> law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section <bdt class="block-component"></bdt>"<bdt class="statement-end-if-in-editor"></bdt></span></span><span data-custom-class="body_text"><a data-custom-class="link" href="#contact"><span style="color: rgb(0, 58, 250); font-size: 15px;">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></span><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                                                  <bdt class="block-component"></bdt>"
                                                                                </span>
                                                                                <bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"></span></bdt>
                                                                              </span>
                                                                              <bdt class="statement-end-if-in-editor"><span style="font-size: 15px;"></span></bdt><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                                                                                  <bdt class="statement-end-if-in-editor"><span data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                                                                                                          <bdt class="statement-end-if-in-editor">
                                                                                                                            <bdt class="statement-end-if-in-editor"></bdt>
                                                                                                                          </bdt>
                                                                                                                        </span></span></span></span></span></span></span></span></span></span></span></bdt>
                                                                                                </span></span></span></span></span></span></span></span></span></span>
                                                                              <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                                              <bdt class="block-component"><span style="font-size: 15px;"></span></bdt>
                                                                            </div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div id="policyupdates" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">11. DO WE MAKE UPDATES TO THIS NOTICE?</span></strong></span></span></span></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em><strong>In Short:&nbsp;</strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated <bdt class="block-component"></bdt>"Revised"<bdt class="statement-end-if-in-editor"></bdt> date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</span></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div id="contact" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></strong></span></span></span></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you have questions or comments about this notice, you may <span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">
                                                                                        <bdt class="block-component">
                                                                                          <bdt class="block-component"></bdt>
                                                                                        </bdt>email us at <bdt class="question">support@procrastinix.com or&nbsp;</bdt>
                                                                                        <bdt class="statement-end-if-in-editor">
                                                                                          <bdt class="block-component"></bdt>
                                                                                        </bdt>
                                                                                      </span></span><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">contact us by post at:</span></span></span></span></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                                            <bdt class="question">ProcrastiNix</bdt>
                                                                                          </span></span></span></span></span><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                                        <bdt class="block-component"></bdt>
                                                                                      </span></span></span></span></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                                                  <bdt class="question">__________</bdt><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                                                                                      <bdt class="block-component"></bdt>
                                                                                    </span></span>
                                                                                </span></span></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                                                  <bdt class="question">__________</bdt><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                                                                                      <bdt class="block-component"></bdt>
                                                                                      <bdt class="block-component"></bdt>
                                                                                      <bdt class="block-component"></bdt>
                                                                                    </span></span>
                                                                                </span><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;">
                                                                                      <bdt class="statement-end-if-in-editor"></bdt>
                                                                                    </span></span></span></span><span data-custom-class="body_text"><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);">
                                                                                      <bdt class="statement-end-if-in-editor"><span style="color: rgb(89, 89, 89);"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                                                              <bdt class="block-component">
                                                                                                <bdt class="block-component"></bdt>
                                                                                              </bdt>
                                                                                            </span></span></span></bdt>
                                                                                    </span></span></span>
                                                                                <bdt class="block-component"><span style="font-size: 15px;"></span></bdt><span style="font-size: 15px;"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px;"><span data-custom-class="body_text">
                                                                                          <bdt class="statement-end-if-in-editor">
                                                                                            <bdt class="block-component"></bdt>
                                                                                          </bdt>
                                                                                        </span></span></span></span></span>
                                                                              </span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div id="request" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control" style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></strong></span></span></span></span></span></div>
                                                                            <div style="line-height: 1.5;"><br></div>
                                                                            <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">
                                                                                    <bdt class="block-component"></bdt>Based on the applicable laws of your country<bdt class="block-component"></bdt> or state of residence in the US<bdt class="statement-end-if-in-editor"></bdt>, you may<bdt class="else-block">
                                                                                      <bdt class="block-component"> have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to <bdt class="block-component"></bdt>withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please <bdt class="block-component"></bdt>fill out and submit a&nbsp;</bdt>
                                                                                    </bdt>
                                                                                  </span><span style="color: rgb(0, 58, 250);"><span data-custom-class="body_text"><span style="color: rgb(0, 58, 250); font-size: 15px;"><a data-custom-class="link" href="https://app.termly.io/notify/93691615-72c8-40e2-a362-e771b6f7c6ae" rel="noopener noreferrer" target="_blank">data subject access request</a></span></span></span>
                                                                                  <bdt class="block-component"><span data-custom-class="body_text"></span></bdt>
                                                                                </span></span><span data-custom-class="body_text">.</span></div>
                                                                            <style>
                                                                              ul {
                                                                                list-style-type: square;
                                                                              }

                                                                              ul>li>ul {
                                                                                list-style-type: circle;
                                                                              }

                                                                              ul>li>ul>li>ul {
                                                                                list-style-type: square;
                                                                              }

                                                                              ol li {
                                                                                font-family: Arial;
                                                                              }
                                                                            </style>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
`

const Privacy = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0)
  }, [])

  return (
    <Stack px={8} py={4} border='5px solid #eaeaea' borderRadius={8}>
      <Link to='/' style={{ textDecoration: 'none', alignSelf: 'center', cursor: 'pointer' }}>
        <img src={Mascot} width={80} />
      </Link>
      <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />
      <Link to='/'>
        <Typography mt={2} variant='h6' align='center'>
          Back to Homepage
        </Typography>
      </Link>
    </Stack>
  )
}

export default Privacy
