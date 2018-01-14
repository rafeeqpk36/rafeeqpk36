import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container,Card,CardItem,  Thumbnail, ListItem,List ,Button, Content, Left, Right, Body, Icon, Text,Badge } from 'native-base';
export default class ForCard extends React.Component{

	render()
	{
		return(

		<Content>
		<Body>
		<Card>


			 <List >
			       	<ListItem avatar >
			              <Left>
			                <Thumbnail source={{ uri: 'https://www.seeklogo.net/wp-content/uploads/2016/11/twitter-icon-square-logo-preview.png' }} />
			             </Left>
			                     <Body>
			                      <Text style={{fontWeight: 'bold'}}>
			                         Rafeeq P K

            <Icon name="ios-checkmark-circle" style={{ fontSize: 15, color: "blue", lineHeight: 20 }}/>

			                        <Text note> @innovative </Text>
			                        <Text note>3:43 pm <Icon name="ios-arrow-down" style={{ fontSize: 15, color: "#000", lineHeight: 20 }}/>
															  </Text>

			                      </Text>

			                      <Text >Live the moment...</Text>
			              </Body>


			            </ListItem>
			        </List>
			         <Body>
			       	<CardItem cardBody>

			              <Image source= {{ uri: 'http://www.21stcenturytiger.org/wp-content/blogs.dir/2/files/public-photos/thumbs/thumbs_DSC_0091-1.jpg'}} style={{height: 200, width: null, flex: 1}}/>
			            </CardItem>
			            <CardItem>
			              <Body>
			                <Button transparent>
			                  <Icon active name="chatbubbles" />
			                  <Text>16</Text>
			                </Button>
			              </Body>
			              <Body>
			                <Button transparent>
			                  <Icon active name="git-compare" />
			                  <Text>4</Text>
			                </Button>
			              </Body>

			               <Body>
				                <Button transparent>
				                  <Icon active name="heart" />

				                  <Text> 40 </Text>
				                </Button>
				          </Body>

			              <Body>

				            <Button transparent>
				              	<Icon active name="mail" />
				           	</Button>

			              </Body>
			            </CardItem>

        			</Body>

        			</Card>
        			</Body>

        		</Content>



			);
	}

}
