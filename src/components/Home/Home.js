import React from "react";
import {Button, Heading, Layout, Card, Stack, Badge, Link, TextStyle, Subheading, MediaCard, Icon} from '@shopify/polaris'
import {OrdersMajorTwotone, StoreStatusMajorMonotone, ChevronRightMinor} from '@shopify/polaris-icons';

function Home() {
  const noStoreActivityMarkup = (
    <Card sectioned subdued>
      <Stack alignment="center">
        <Icon source={StoreStatusMajorMonotone} color="indigo"/>
      <Stack.Item>
        <Heading><TextStyle variation="subdued">No store activity</TextStyle></Heading>
        <TextStyle variation="subdued">Your sales, orders, and sessions will show here.</TextStyle>
      </Stack.Item>
      </Stack>
    </Card>
  );

  const orderToFulfillMarkup = (
    <Card sectioned subdued>
      <Stack alignment="center">
        <Stack.Item fill >
          <Stack>
            <Icon source={OrdersMajorTwotone} color="indigo"/>
            <p><TextStyle variation="strong">1 order</TextStyle> to fulfill</p>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Icon source={ChevronRightMinor} />
        </Stack.Item>
      </Stack>
    </Card>
  );

  const sellingGiftCardsMarkup = (
    <MediaCard
      title="Start selling gift cards"
      primaryAction={{content: 'Set up gift cards'}}
      description="Learn about setup and start selling gift cards in your online store, today."
      popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
    >
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="https://burst.shopifycdn.com/photos/smiling-businesswoman-in-office.jpg?width=1850"
      />
    </MediaCard>
  );

  const covidMarkup = (
    <section style={{textAlign: "center"}}>
      <MediaCard
        portrait
        title="Get extra support during COVID-19"
        primaryAction={{content: 'Learn more about our response'}}
        description="We have launched a series of live webinars and a dedicated COVID-19 forum. Ask questions, share stories, and learn how other businesses are adapting. We're working on more ways to help support you, so watch for more updates soon."
        popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
      >  
      <img
          alt=""
          width="50%"
          height="50%"
          src="https://cdn.shopify.com/s/assets/admin/home/announcements/announcement-covid-19-d15c73a05cac3430ae362418b58aebcbae56462b1f9f6297b9dd8ca6cc2bce79.svg"
        />
      </MediaCard>
    </section>
  );

  const addDomainMarkup = (
    <Card title="Add your own domain to strengthen your brand" sectioned>
      <p>Your current domain is <TextStyle variation="strong">aptghost.myshopify.com</TextStyle>. Add or buy a custom domain to help customers remember your online store.</p><br/>
      <Button>Add Domain</Button>
    </Card>
  );

  const sideBarButtonsMarkup = (
    <Card.Section>
      <Stack distribution="center">
        <Button disclosure>
          All channels
        </Button>
        <Button disclosure>
          Today
        </Button>
      </Stack>
    </Card.Section>
  );

  const sideBarTotalSalesMarkup = (
    <Card.Section>
      <Stack alignment="center">
        <Stack.Item fill>
          <Subheading>TOTAL SALES</Subheading>
        </Stack.Item>
        <Stack.Item>
          <TextStyle variation="subdued">Today</TextStyle>
        </Stack.Item>
      </Stack>
      <TextStyle variation="subdued">There were no sales during this time.</TextStyle>
    </Card.Section>
  );

  const sideBarTotalSalesBreakdownMarkup = (
    <Card.Section>
      <Stack alignment="center">
        <Stack.Item fill>
          <Subheading>TOTAL SALES BREAKDOWN</Subheading>
        </Stack.Item>
        <Stack.Item>
          <TextStyle variation="subdued">Today</TextStyle>
        </Stack.Item>
      </Stack>
      <TextStyle variation="subdued">There were no sales during this time.</TextStyle>
    </Card.Section>
  );

  const sideBarTotalSalesByChannelMarkup = (
    <Card.Section>
      <Stack alignment="center">
        <Stack.Item fill>
          <Subheading>TOTAL SALES BY CHANNEL</Subheading>
        </Stack.Item>
        <Stack.Item>
          <TextStyle variation="subdued">Today</TextStyle>
        </Stack.Item>
      </Stack>
      <TextStyle variation="subdued">There were no sales during this time.</TextStyle>
    </Card.Section>
  );

  const sideBarTopProduct = (
    <Card.Section>
      <Stack alignment="center">
        <Stack.Item fill>
          <Subheading>TOP PRODUCTS</Subheading>
        </Stack.Item>
        <Stack.Item>
          <TextStyle variation="subdued">Today</TextStyle>
        </Stack.Item>
      </Stack>
      <TextStyle variation="subdued">There were no products sold during this time.</TextStyle>
    </Card.Section>
  );

  const sideBarPayoutScheduleMarkup = (
    <Card.Section title="Payout Schedule" subdued>
      <Card.Subsection>
        <Stack distribution="trailing">
          <Stack.Item fill>
            <Stack>
              <p>February 28</p>
              <Badge status="success">Paid</Badge>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <p>$50.04</p>
          </Stack.Item>
        </Stack>

        <Stack distribution="trailing">
          <Stack.Item fill>
            <Stack>
              <p>February 12</p>
              <Badge status="success">Paid</Badge>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <p>$45.82</p>
          </Stack.Item>
        </Stack>

        <Stack distribution="trailing">
          <Stack.Item fill>
            <p>Balance</p>
          </Stack.Item>
          <Stack.Item>
            <p>$0.00</p>
          </Stack.Item>
        </Stack>
      </Card.Subsection>

      <Card.Subsection>
        <TextStyle variation="subdued">Your next payout is estamated for April 17.</TextStyle><br/>
        <Link>View all payouts</Link>
      </Card.Subsection>
    </Card.Section>
  );

  const sideBarActivityMarkup = (
    <Card.Section>
      <Subheading>ACTIVITY</Subheading><br/>
      <p>Printful: Print-on-Demand published a product: </p>
      <Link>OG Rectangles Warmth.</Link><br/>
      <TextStyle variation="subdued">March 5, 2020, 11:50 a.m. EST</TextStyle><br/><br/>

      <p>Printful: Print-on-Demand published a product: </p>
      <Link>OG Rectangles Warmth.</Link><br/>
      <TextStyle variation="subdued">March 5, 2020, 11:50 a.m. EST</TextStyle><br/><br/>

      <p>You added user: Justin Dempsey</p>
      <TextStyle variation="subdued">March 4, 2020, 12:33 p.m. EST</TextStyle><br/><br/>

      <Link>View all recent activity</Link><br/>
    </Card.Section>
  );

  return (
  <Layout>
    {/* MAIN SECTION */}
    <Layout.Section>
      <section style={{width: '70%', margin: '3% auto'}}>
        {noStoreActivityMarkup}<br/>
        {orderToFulfillMarkup}<br/>
        {sellingGiftCardsMarkup}<br/>
        {covidMarkup}<br/>
        {addDomainMarkup}
      </section>
    </Layout.Section>

    {/* SIDE BAR SECTION */}
    <Layout.Section secondary>
      <Card>
        {sideBarButtonsMarkup}
        {sideBarTotalSalesMarkup}
        {sideBarTotalSalesBreakdownMarkup}
        {sideBarTotalSalesByChannelMarkup}
        {sideBarTopProduct}
        {sideBarPayoutScheduleMarkup}
        {sideBarActivityMarkup}  
      </Card>
    </Layout.Section>
  </Layout>
  );
}

export default Home;
