import React, {useState} from "react";
import {Button, Tabs, Filters, Page, Card, ResourceList, ResourceItem, TextStyle, Stack, Thumbnail, ButtonGroup} from '@shopify/polaris'
import {ExportMinor, ImportMinor, StarFilledMinor, SortMinor} from '@shopify/polaris-icons';

function Products() {
  const [selectedItems, setSelectedItems] = useState([]);

  const resourceName = {
    singular: 'product',
    plural: 'products',
  };

  const items = [
    {
      id: 1,
      product: 'Baby Rectangle Pillow',
      inventory: 'Inventory not tracked',
      type: '',
      vendor: 'Dirty Rectangles Merchanise',
      image: 'https://cdn.shopify.com/s/files/1/2338/5981/products/mockup-a2a07c91_540x.jpg?v=1581226891'
    },
    {
      id: 2,
      product: 'BUFFER RECTANGLES',
      inventory: 'Inventory not tracked',
      type: '',
      vendor: 'Dirty Rectangles Merchanise',
      image: 'https://cdn.shopify.com/s/files/1/2338/5981/products/mockup-41b5226b_540x.png?v=1581094648'
    },
    {
      id: 3,
      product: 'Derek\'s Hat',
      inventory: '0 in stock',
      type: 'My hat',
      vendor: 'Apt Ghost',
      image: 'https://cdn.shopify.com/s/files/1/2338/5981/products/mockup-5b38be34_1080x.png?v=1516379226'
    },
    {
      id: 4,
      product: 'Dirty Magic Mug',
      inventory: 'Inventory not tracked',
      type: '',
      vendor: 'Dirty Rectangles Merchanise',
      image: 'https://cdn.shopify.com/s/files/1/2338/5981/products/mockup-d824bf92_540x.png?v=1581094220'
    }
  ];
  
  const bulkActions = [{ content: 'Edit product', }];

  const filters = [
    {
      key: 'productVendor',
      label: 'Product vendor',
      shortcut: true,
    },
    {
      key: 'availability',
      label: 'Availability',
      shortcut: true,
    },
    {
      key: 'taggedWith',
      label: 'Tagged with',
      shortcut: true,
    },
    {
      key: 'moreFilters',
      label: 'More filers',
      shortcut: true,
    },
  ];

  const filterControl = (
    <Filters filters={filters}>
      <div style={{paddingLeft: '8px'}}>
        <ButtonGroup>
          <Button icon={StarFilledMinor} disabled>Saved</Button>
          <Button icon={SortMinor}>Sort</Button>
        </ButtonGroup>
      </div>
    </Filters>
  );

  const tabs = [{ content: 'All' }];

  return (
    <Page
      fullWidth
      title="Products"
      primaryAction={{content: 'Add product'}}
      secondaryActions={[
        {
          content: 'Export', 
          icon: ExportMinor
        },
        {
          content: 'Import', 
          icon: ImportMinor
        },
      ]}
      actionGroups={[
        {
          title: 'More actions',
          actions: [{content: 'Do something'}],
        },
      ]}
    >
      <Card>
        <Tabs tabs={tabs} selected={0}>
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
    const {id, url, product, inventory, type, vendor, image} = item;
    return (
      <ResourceItem
        id={id}
        url={url}
        accessibilityLabel={`View details for ${product}`}
        persistActions>
        <Stack alignment='center' distribution="fillEvenly">
          <Stack alignment='center'>
            <Thumbnail source={image} alt=""/>
            <TextStyle variation="strong">{product}</TextStyle>
          </Stack>
          <TextStyle variation="subdued">{inventory}</TextStyle>
          <p>{type}</p>
          <p>{vendor}</p>
        </Stack>
      </ResourceItem>
    );
  }
}
export default Products;
