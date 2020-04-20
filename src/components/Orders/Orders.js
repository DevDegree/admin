import React, {useState, useCallback} from "react";
import {Button, Tabs, Filters, Page, Card, ResourceList, ResourceItem, TextStyle, Stack, Badge, ButtonGroup} from '@shopify/polaris'
import {ExportMinor, StarFilledMinor, SortMinor, LocationsMinor} from '@shopify/polaris-icons';

function Orders() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [queryValue, setQueryValue] = useState(null);

  const handleQueryValueChange = useCallback(
    (value) => setQueryValue(value),
    [],
  );
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleClearAll = useCallback(() => {
    handleQueryValueRemove();
  }, [handleQueryValueRemove]);

  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const items = [
    {
      id: 1023,
      url: 'orders/1023',
      date: 'Feb. 25 at 05:54 p.m.',
      customer: 'Kezia Adamo',
      payment: 'paid',
      fulfillment: 'fulfilled',
      total: '$51.37'
    },
    {
      id: 1022,
      url: 'orders/1022',
      date: 'Feb. 8 at 05:57 p.m.',
      customer: 'Liam Sauve',
      payment: 'paid',
      fulfillment: 'fulfilled',
      total: '$33.51'
    },
    {
      id: 1021,
      url: 'orders/1021',
      date: 'Feb. 7 at 12:57 p.m.',
      customer: 'Travin Martin',
      payment: 'paid',
      fulfillment: 'fulfilled',
      total: '$47.06'
    },
  ];
  
  const bulkActions = [
    {
      content: 'Edit order',
    },
  ];

  const filters = [
    {
      key: 'status',
      label: 'Status',
      shortcut: true,
    },
    {
      key: 'paymentStatus',
      label: 'Payment Status',
      shortcut: true,
    },
    {
      key: 'fulfillmentStatus',
      label: 'Fulfillment Status',
      shortcut: true,
    },
    {
      key: 'moreFilters',
      label: 'More filers',
      shortcut: true,
    },
  ];

  const filterControl = (
    <Filters
      queryValue={queryValue}
      filters={filters}
      onQueryChange={handleQueryValueChange}
      onQueryClear={handleQueryValueRemove}
      onClearAll={handleClearAll}
      
    >
      <div style={{paddingLeft: '8px'}}>
        <ButtonGroup>
          <Button icon={StarFilledMinor} disabled>Saved</Button>
          <Button icon={SortMinor}>Sort</Button>
        </ButtonGroup>
      </div>
    </Filters>
  );

  const tabs = [
    { content: 'All' },
    { content: 'Open' },
    { content: 'Unfilfilled and partially fulfilled' },
    { content: 'Unpaid' }
  ];

  return (
    <Page
      fullWidth
      title="Orders"
      primaryAction={{content: 'Create order'}}
      secondaryActions={[
        {
          content: 'Export', 
          icon: ExportMinor
        },
      ]}
      actionGroups={[
        {
          title: 'More actions',
          actions: [
            {
              content: 'Do something'
            },
          ],
        },
      ]}
    >
      <Card>
        <Tabs tabs={tabs} selected={0}>
          <Stack distribution='trailing'>
            <Button icon={LocationsMinor} disclosure outline>All locations</Button>
          </Stack>
          
          <ResourceList
            resourceName={resourceName}
            items={items}
            renderItem={renderItem}
            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
            bulkActions={bulkActions}
            filterControl={filterControl}
          />
        </Tabs>
      </Card>
    </Page>
  );

  function renderItem(item) {
    const {id, url, date, customer, payment, fulfillment, total} = item;
    return (
      <ResourceItem
        id={id}
        url={url}
        accessibilityLabel={`View details for ${customer}`}
        persistActions
      >
        <Stack >
          <Stack.Item fill>
            <Stack distribution="fillEvenly">
              <p>#{id}</p>
              <TextStyle variation="subdued">{customer}</TextStyle>
              <TextStyle variation="subdued">{date}</TextStyle>
              <Badge progress="complete">{payment}</Badge>
              <Badge progress="complete">{fulfillment}</Badge>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <TextStyle variation="subdued">{total}</TextStyle>
          </Stack.Item>
        </Stack>
      </ResourceItem>
    );
  }
}

export default Orders;
