QUnit.test('extractSentences', function(assert) {
  var raw = {
    "sentences":[
        {
            "trans":"これはテストです",
            "orig":"This is a test",
            "backend":1
        },
        {
            "translit":"Kore wa tesutodesu"
        }
    ],
    "src":"en",
    "confidence":0.19605306,
    "ld_result":{
        "srclangs":[
            "en"
        ],
        "srclangs_confidences":[
            0.19605306
        ],
        "extended_srclangs":[
            "en"
        ]
    }
  };
  // Single sentence test
  assert.equal(extractSentences(raw), 'これはテストです');

  // TODO: Multi-sentence test
});
