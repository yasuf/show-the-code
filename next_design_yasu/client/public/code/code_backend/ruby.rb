insights = Algolia:Insights::Client.create('ALGOLIA_APP_ID', 'ALG')

insights.user('user-123456').clicked_object_ids_after_search(
    'Product Clicked',
    'products',
    ['9780545139700'],
    [7],
    'cba8245617aeace44'
)